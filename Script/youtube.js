async function request(method, params) {
  return new Promise((resolve, reject) => {
    const httpMethod = $httpClient[method.toLowerCase()];
    httpMethod(params, (error, response, data) => {
      resolve({ error, response, data });
    });
  });
}

async function main() {
  const { error, response, data } = await request(
    "GET",
    "https://www.youtube.com/premium"
  );

  if (error) {
    $done({
      content: "Network Error",
      backgroundColor: "",
    });
    return;
  }

  const text = data.toLowerCase();

  if (
    text.includes("youtube premium is not available in your country") ||
    text.includes("不可在您的国家/地区使用") || // 简体中文
    text.includes("無法在您的國家/地區使用")    // 繁体中文
  ) {
    $done({
      content: "Not Available",
      backgroundColor: "",
    });
    return;
  }

  // 只要包含“无广告”或“Premium”字眼通常即代表解锁
  if (
    text.includes("ad-free") ||
    text.includes("无广告") ||     // 简体中文
    text.includes("無廣告") ||     // 繁体中文 (香港/台湾节点)
    text.includes("広告なし") ||   // 日文 (日本节点)
    text.includes("premium")      // 兜底：大部分可用页面的Title或按钮都包含这个词
  ) {
    $done({
      content: `Available`,
      backgroundColor: "#FF0000",
    });
    return;
  }

  $done({
    content: "Unknown Error",
    backgroundColor: "",
  });
}

(async () => {
  main()
    .then((_) => {})
    .catch((error) => {
      $done({});
    });
})();
