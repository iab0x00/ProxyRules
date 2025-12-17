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
    "https://ios.chat.openai.com"
  );

  if (error) {
    $done({
      content: "Network Error",
      backgroundColor: "",
    });
    return;
  }

  if (data.toLowerCase().includes("disallowed isp")) {
    $done({
      content: "Disallowed ISP",
      backgroundColor: "",
    });
    return;
  }

  if (data.toLowerCase().includes("been blocked")) {
    $done({
      content: "Blocked",
      backgroundColor: "",
    });
    return;
  }

  $done({
    content: `Available`,
    backgroundColor: "#88A788",
  });
}

(async () => {
  main()
    .then((_) => {})
    .catch((error) => {
      $done({});
    });
})();
