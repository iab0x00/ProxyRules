/******************************
脚本名称: NodeSeek
平台: Surge/Shadowrocket
功能: Cookie 捕获 + 每日签到领鸡腿 + 统计分析
版本: 1.1.1
脚本作者: iab0x00
使用说明:
1. 打开「Cookie捕获」后访问个人页获取 Cookie
2. 成功后关闭「Cookie捕获」
3. 定时由模块参数 签到小时 / 签到分钟 控制
4. 签到奖励 false=随机（默认）/ true=固定 鸡腿
5. 总数显示 false=隐藏（默认）/ true=显示 鸡腿总数
*******************************/

const SCRIPT_NAME = "NodeSeek🎉";
const STORE_KEY = "nodeseek_headers";
const STATS_KEY = "nodeseek_stats";
const ATTEND_BASE = "https://www.nodeseek.com/api/attendance";

const DEFAULT_HEADERS = {
  Priority: "u=3, i",
  "Content-Type": "text/plain;charset=UTF-8",
  Origin: "https://www.nodeseek.com",
  "refract-sign": "",
  "User-Agent": "Mozilla/5.0",
  "refract-key": "",
  "Sec-Fetch-Mode": "cors",
  Cookie: "",
  Referer: "https://www.nodeseek.com/",
  "Accept-Language": "zh-CN,zh-Hans;q=0.9",
  Accept: "*/*"
};

const HEADER_KEYS = Object.keys(DEFAULT_HEADERS);

function log(msg) {
  console.log("[" + SCRIPT_NAME + "] " + msg);
}

function notify(subtitle, body) {
  log(subtitle + ": " + body);
  if (typeof $notification !== "undefined" && $notification.post) {
    $notification.post(SCRIPT_NAME, subtitle, body);
  }
}

function envTrue(val) {
  if (val == null || String(val).trim() === "") return false;
  return ["1", "true", "yes", "on"].indexOf(String(val).trim().toLowerCase()) !== -1;
}

function parseArgs(str) {
  const out = {};
  if (!str) return out;
  String(str).split(/[&,]/).forEach(function (pair) {
    const idx = pair.indexOf("=");
    if (idx > 0) {
      out[pair.slice(0, idx).trim()] = pair.slice(idx + 1).trim();
    } else if (pair.trim()) {
      out[pair.trim()] = "true";
    }
  });
  return out;
}

function headerValue(src, key) {
  return src[key] || src[key.toLowerCase()] || src[key.toUpperCase()] || "";
}

function pickHeaders(src) {
  const saved = {};
  for (let i = 0; i < HEADER_KEYS.length; i++) {
    const key = HEADER_KEYS[i];
    const value = headerValue(src || {}, key);
    if (value) saved[key] = value;
  }
  return saved;
}

function buildAttendHeaders(saved) {
  const headers = {};
  for (let i = 0; i < HEADER_KEYS.length; i++) {
    const key = HEADER_KEYS[i];
    headers[key] = (saved && saved[key]) || DEFAULT_HEADERS[key];
  }
  return headers;
}

function attendUrl(fixed) {
  return ATTEND_BASE + "?random=" + (fixed ? "false" : "true");
}

function httpPost(url, headers, body) {
  return new Promise(function (resolve, reject) {
    $httpClient.post(
      { url: url, headers: headers, body: body, timeout: 10 },
      function (error, response, data) {
        if (error) {
          reject(error);
        } else {
          resolve({ status: response.status, data: data });
        }
      }
    );
  });
}

function doCapture() {
  const args = parseArgs($argument);
  if (!envTrue(args.ENABLE_CAPTURE)) {
    $done({});
    return;
  }

  const saved = pickHeaders($request && $request.headers);
  if (!saved.Cookie || saved.Cookie.trim() === "") {
    $done({});
    return;
  }

  $persistentStore.write(JSON.stringify(saved), STORE_KEY);
  log("请求头已保存，共 " + Object.keys(saved).length + " 个字段");
  notify("Cookie 获取成功", "请求头已保存，请关闭模块「Cookie」开关");
  $done({});
}

async function doCheckIn() {
  const args = parseArgs($argument);
  const fixed = envTrue(args.FIXED_REWARD);
  const showTotal = envTrue(args.SHOW_TOTAL);
  const url = attendUrl(fixed);
  log("开始执行签到任务（" + (fixed ? "固定鸡腿" : "随机鸡腿") + "）");

  const raw = $persistentStore.read(STORE_KEY);
  if (!raw) {
    notify("缺少请求头", "请先打开 Cookie捕获 并访问个人页面");
    $done();
    return;
  }

  let saved;
  try {
    saved = JSON.parse(raw);
  } catch (e) {
    notify("数据异常", "请重新打开 Cookie捕获 并访问个人页面");
    $done();
    return;
  }

  try {
    const res = await httpPost(url, buildAttendHeaders(saved), "");
    const status = res.status;
    const text = res.data;
    log("签到响应 HTTP " + status + ": " + text);

    let resData = null;
    let message = "";
    try {
      resData = JSON.parse(text);
      message = (resData && resData.message) || "";
    } catch (e) {}

    const modeTag = fixed ? "固定" : "随机";
    if (message.indexOf("请先登录") >= 0) {
      notify("Cookie 失效", "请重新打开 Cookie捕获 并访问个人页面");
    } else if (message.indexOf("已完成签到") >= 0 || message.indexOf("已签到") >= 0) {
      notify("今日已签到", message);
    } else if (status === 403) {
      notify("被风控", message || "403，稍后重试");
    } else if (status >= 200 && status < 300 && resData && resData.success === true) {

      const currentGain = resData.gain;
      const isGainValid = typeof currentGain === "number" && currentGain > 0;

      let stats = { count: 0, gained: 0, lastDate: "" };
      try {
        const localStats = JSON.parse($persistentStore.read(STATS_KEY));
        if (localStats && typeof localStats.count === "number" && typeof localStats.gained === "number") {
          stats.count = localStats.count;
          stats.gained = localStats.gained;
          stats.lastDate = typeof localStats.lastDate === "string" ? localStats.lastDate : "";
        }
      } catch (e) {}

      const now = new Date();
      const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

      if (isGainValid && stats.lastDate !== today) {
        stats.count += 1;
        stats.gained += currentGain;
        stats.lastDate = today;
        $persistentStore.write(JSON.stringify(stats), STATS_KEY);
      }

      let statsText = "";
      if (stats.count > 0) {
        const avg = (stats.gained / stats.count).toFixed(1);
        statsText = `累计${stats.count}天，日均${avg} 🍗`;
      }

      let rewardText = message || "签到完成";
      if (showTotal && typeof resData.current === "number") {
        rewardText += `，当前${resData.current} 🍗`;
      }

      const bodyText = statsText ? `${rewardText}\n${statsText}` : rewardText;

      notify("签到成功（" + modeTag + "）", bodyText);
    } else {
      notify("请求异常 HTTP " + status, message || "无返回信息");
    }
  } catch (error) {
    notify("网络错误", "请检查网络连接");
    log(error && error.message ? error.message : String(error));
  }
  $done();
}

if (typeof $request !== "undefined") {
  doCapture();
} else {
  doCheckIn();
}
