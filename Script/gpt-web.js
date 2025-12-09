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
    "https://api.openai.com/compliance/cookie_requirements"
  );

  if (error) {
    $done({
      content: "Network Error",
      backgroundColor: "",
    });
    return;
  }

  if (data.toLowerCase().includes("unsupported_country")) {
    $done({
      content: "Unsupported Country",
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
