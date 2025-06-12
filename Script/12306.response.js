// 2024-06-13 07:40

const url = $request.url;
const header = $request.headers;
const contype = header["Content-Type"] || header["content-type"];
const headopt = header["Operation-Type"] || header["operation-type"];
const ua = header["User-Agent"] || header["user-agent"];
const isQuanX = typeof $task !== "undefined";

if (url.includes("/mobile.12306.cn/otsmobile/app/mgs/")) {
  // 12306页面内容
  const list12306 = [
    // "com.cars.otsmobile.bangbangSafe.deciveInfo", // 设备序列号
    // "com.cars.otsmobile.checkLoginStatus", // 登录信息
    // "com.cars.otsmobile.city",
    // "com.cars.otsmobile.initCountry",
    // "com.cars.otsmobile.initNewSysCache",
    // "com.cars.otsmobile.initProvince",
    "com.cars.otsmobile.integration.activityBanner", // 活动横幅
    "com.cars.otsmobile.memberInfo.getMemberQa", // 铁路会员 常见问题
    // "com.cars.otsmobile.memberInfo.integrationHomeInit", // 铁路会员 会员信息
    // "com.cars.otsmobile.newHomePage.getWeatherByStationCode", // 天气信息
    "com.cars.otsmobile.newHomePage.initData", // 热门资讯
    "com.cars.otsmobile.newHomePageBussData", // 商品信息流
    // "com.cars.otsmobile.newHomePageRefresh",
    "com.cars.otsmobile.paySuccBuss.bussEntryShow" // 商业推广
    // "com.cars.otsmobile.travelPage.initData", // 出行服务
  ];
  if (isQuanX) {
    if (list12306?.includes(headopt)) {
      $done({ status: "HTTP/1.1 404 Not Found" });
    } else {
      $done({});
    }
  } else {
    if (list12306?.includes(headopt)) {
      $done();
    } else {
      $done({});
    }
  }
} else {
  $done({});
}
