/******************************
脚本名称: NodeSeek
平台: Surge/Shadowrocket
功能: Cookie 捕获 + 每日签到领鸡腿
脚本作者: iab0x00 Powered by DeepSeek-V4-Pro
使用说明:
1. 模块打开「Cookie」后访问 NodeSeek 个人页保存请求头
2. 成功后关闭「Cookie」
3. 定时由模块参数 HOUR / MINUTE 控制
4. 签到奖励 false=随机（默认）/ true=固定 鸡腿
*******************************/

const SCRIPT_NAME = "NodeSeek🎉";
const STORE_KEY = "nodeseek_headers";
const ATTEND_BASE = "https://www.nodeseek.com/api/attendance";

const DEFAULT_HEADERS = {
  Connection: "keep-alive",
  "Accept-Encoding": "gzip, deflate, br",
  Priority: "u=3, i",
  "Content-Type": "text/plain;charset=UTF-8",
  Origin: "https://www.nodeseek.com",
  "refract-sign": "",
  "User-Agent": "Mozilla/5.0",
  "refract-key": "",
  "Sec-Fetch-Mode": "cors",
  Cookie: "",
  Host: "www.nodeseek.com",
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
    log("Cookie 开关已关闭，跳过");
    $done({});
    return;
  }

  const saved = pickHeaders($request && $request.headers);
  if (Object.keys(saved).length === 0) {
    notify("Cookie 获取失败", "未获取到请求头");
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
  const url = attendUrl(fixed);
  log("开始执行签到任务（" + (fixed ? "固定鸡腿" : "随机鸡腿") + "）");

  const raw = $persistentStore.read(STORE_KEY);
  if (!raw) {
    notify("缺少请求头", "请先打开 Cookie 并访问个人页面");
    $done();
    return;
  }

  let saved;
  try {
    saved = JSON.parse(raw);
  } catch (e) {
    notify("数据异常", "请重新打开 Cookie 并访问个人页面");
    $done();
    return;
  }

  try {
    const res = await httpPost(url, buildAttendHeaders(saved), "");
    const status = res.status;
    const text = res.data;
    log("签到响应 HTTP " + status + ": " + text);

    let message = "";
    try {
      message = (JSON.parse(text) || {}).message || "";
    } catch (e) {}

    const modeTag = fixed ? "固定" : "随机";
    if (message.indexOf("请先登录") >= 0) {
      notify("Cookie 失效", "请重新打开 Cookie 并访问个人页面");
    } else if (message.indexOf("已完成签到") >= 0 || message.indexOf("已签到") >= 0) {
      notify("今日已签到", message);
    } else if (status === 403) {
      notify("被风控", message || "403，稍后重试");
    } else if (status >= 200 && status < 300) {
      notify("签到成功（" + modeTag + "）", message || "签到完成");
    } else {
      notify("请求异常 HTTP " + status, message || "无返回信息");
    }
  } catch (error) {
    notify("网络错误", "请检查网络连接");
    log(error && error.message ? error.message : String(error));
  }
  $done();
}

if ($script && $script.type === "cron") {
  doCheckIn();
} else {
  doCapture();
}
