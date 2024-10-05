// Firefox 中仍然可以使用 webRequest API 拦截请求并重定向
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);

    // 检查是否匹配特定的请求
    if (url.hostname === "ssl.ptlogin2.qq.com" && url.pathname === "/jump") {
      // 获取查询参数 'u1'
      const u1 = url.searchParams.get("u1");

      if (u1) {
        // 解码 u1 参数，获得目标 URL
        const decodedUrl = decodeURIComponent(u1);

        // 返回重定向指令
        return { redirectUrl: decodedUrl };
      }
    }

    return {};
  },
  { urls: ["*://ssl.ptlogin2.qq.com/jump*"] },  // 匹配的 URL 模式
  ["blocking"]  // 阻止并重定向请求
);
