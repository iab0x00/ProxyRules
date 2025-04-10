/* # 京东比价(弹窗通知版) # 脚本修改来源 https://raw.githubusercontent.com/githubdulong/Script/master/jd_price2.sgmodule
 * 脚本原作者：@mw418
 */
const consolelog = false;
const url = $request.url;
const $ = new Env("京东比价");

// 正则匹配商品id
var regex = /product\/graphext\/(\d+)\.html/;
var match = url.match(regex);
if (!match || match.length < 2) {
  $done({});
  return;
}
let shareUrl = "https://item.m.jd.com/product/" + match[1] + '.html';

// 开始请求前增加随机延时（1～3秒）
randomDelay(1000, 3000).then(() => {
  request_history_price(shareUrl)
    .then(data => {
      if (data) {
        if (data.ok === 1 && data.single) {
          const lower = lowerMsgs(data.single);
          const detail = priceSummary(data);
          const tip = data.PriceRemark.Tip + "(仅供参考)";
          const message = `${lower} ${tip}`;
          $.msg(data.single.title, message, detail);
        } else if (data.ok === 0 && data.msg && data.msg.length > 0) {
          const message = "慢慢买提示您：" + data.msg;
          $.msg('比价结果', '', message);
        }
        $done({});
      } else {
        $done({});
      }
    })
    .catch(() => { $done({}); });
});

// 随机延时函数，传入最短及最长毫秒数
function randomDelay(min, max) {
  return new Promise(resolve => {
    let delay = Math.floor(Math.random() * (max - min + 1)) + min;
    consolelog && console.log("延时 " + delay + " 毫秒后发起请求");
    setTimeout(resolve, delay);
  });
}

// 返回一个更真实的移动端User-Agent，包含了两种模拟
function getRandomUserAgent() {
  const userAgents = [
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1"
  ];
  return userAgents[Math.floor(Math.random() * userAgents.length)];
}

// 修改后调用历史价格接口，增加随机延时内部调用
function request_history_price(share_url) {
  return new Promise((resolve, reject) => {
    const options = {
      url: "https://apapia-history.manmanbuy.com/ChromeWidgetServices/WidgetServices.ashx",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        // 使用改进后的 User-Agent 模拟真实请求
        "User-Agent": getRandomUserAgent()
      },
      body: 'methodName=getHistoryTrend&p_url=' + encodeURIComponent(share_url)
    };
    // 发起请求前，再次增加一个短暂延时（500～1500毫秒）
    randomDelay(500, 1500).then(() => {
      $.post(options, (error, response, data) => {
        if (error) {
          consolelog && console.log("Error:\n" + error);
          reject(error);
        } else {
          consolelog && console.log("Data:\n" + data);
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        }
      });
    });
  });
}

function lowerMsgs(single) {
  const lower = single.lowerPriceyh;
  const timestamp = parseInt(single.lowerDateyh.match(/\d+/)[0], 10);
  const lowerDate = $.time('yyyy-MM-dd', timestamp);
  const lowerMsg = "历史最低:¥" + String(lower) + `(${lowerDate}) `;
  return lowerMsg;
}

function priceSummary(data) {
  let summary = "";
  let listPriceDetail = data.PriceRemark.ListPriceDetail.slice(0, 4);
  let list = listPriceDetail.concat(historySummary(data.single));
  const maxWidth = list.reduce((max, item) => Math.max(max, item.Price.length), 0);
  list.forEach(item => {
    const nameMap = { "双11价格": "双十一价格", "618价格": "六一八价格" };
    item.Name = nameMap[item.Name] || item.Name;
    const Delimiter = ' ';
    if (item.Price == '-') return;
    let len = item.Price.length;
    if (len < maxWidth) {
      item.Price = item.Price.includes('.') || (len + 1 == maxWidth)
        ? item.Price
        : `${item.Price}.`;
      let flag = item.Price.includes('.') ? '0' : ' ';
      item.Price = item.Price.padEnd(maxWidth, flag);
    }
    summary += `${item.Name}${Delimiter}${item.Price}${Delimiter}${item.Date}${Delimiter}${item.Difference === '-' ? '' : item.Difference}\n`;
  });
  summary = summary.replace(/\n$/, "");
  return summary;
}

function historySummary(single) {
  let currentPrice, lowest30, lowest90, lowest180, lowest360;
  const singleArray = JSON.parse(`[${single.jiagequshiyh}]`);
  const singleFormatted = singleArray.map(item => ({ Date: item[0], Price: item[1], Name: item[2] }));
  let list = singleFormatted.reverse().slice(0, 360);
  const createLowest = (name, price, date) => ({ Name: name, Price: `¥${price}`, Date: date, Difference: difference(currentPrice, price), price });
  list.forEach((item, index) => {
    const date = $.time('yyyy-MM-dd', item.Date);
    let price = item.Price;
    if (index === 0) {
      currentPrice = price;
      lowest30 = createLowest("三十天最低", price, date);
      lowest90 = createLowest("九十天最低", price, date);
      lowest180 = createLowest("一百八最低", price, date);
      lowest360 = createLowest("三百六最低", price, date);
    }
    const updateLowest = (lowest, days) => {
      if (index < days && price < lowest.price) {
        lowest.price = price;
        lowest.Price = `¥${price}`;
        lowest.Date = date;
        lowest.Difference = difference(currentPrice, price);
      }
    };
    updateLowest(lowest30, 30);
    updateLowest(lowest90, 90);
    updateLowest(lowest180, 180);
    updateLowest(lowest360, 360);
  });
  return [lowest30, lowest90, lowest180, lowest360];
}

function difference(currentPrice, price, precision = 2) {
  const diff = (parseFloat(currentPrice) - parseFloat(price)).toFixed(precision);
  return diff == 0 ? "-" : `${diff > 0 ? "↑" : "↓"}${Math.abs(diff)}`;
}

// 环境封装部分：此处模拟了平台环境部分函数，如 post、time、msg 等
function Env(name, opts) {
  this.name = name;
  this.post = function(options, callback) {
    // 模拟异步请求回调，此处在 500 毫秒后返回模拟数据
    setTimeout(() => {
      const mockData = JSON.stringify({
        ok: 1,
        single: {
          title: "示例商品",
          lowerPriceyh: "99.9",
          lowerDateyh: "/Date(1680000000000)/",
          jiagequshiyh: "1680000000000,99.9,价格走势"
        },
        PriceRemark: {
          Tip: "价格波动较大",
          ListPriceDetail: [
            { Name: "双11价格", Price: "109.9", Date: "2024-11-11", Difference: "-" },
            { Name: "618价格", Price: "105.9", Date: "2024-06-18", Difference: "↓4.0" }
          ]
        }
      });
      callback(null, { statusCode: 200 }, mockData);
    }, 500);
  };
  this.time = function(format, timestamp) {
    let date = timestamp ? new Date(timestamp) : new Date();
    const pad = n => (n < 10 ? "0" + n : n);
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
  };
  this.msg = function(title, subtitle, body) {
    console.log(title + "\n" + subtitle + "\n" + body);
  };
}

// 模拟运行环境：在实际设备或平台中，环境变量和请求方法由平台提供，这里用于验证脚本逻辑。