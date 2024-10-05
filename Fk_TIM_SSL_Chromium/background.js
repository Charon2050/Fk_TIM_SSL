chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  const url = new URL(details.url);

  // 检查是否匹配特定的请求
  if (url.hostname === "ssl.ptlogin2.qq.com" && url.pathname === "/jump") {
    // 获取查询参数 'u1'
    const u1 = url.searchParams.get("u1");

    if (u1) {
      // 解码 u1 参数，获得目标 URL
      const decodedUrl = decodeURIComponent(u1);

      // 使用 tabs.update 执行重定向到新的 URL
      chrome.tabs.update(details.tabId, { url: decodedUrl });
    }
  }
}, {
  url: [{ urlMatches: "https://ssl.ptlogin2.qq.com/jump" }]
});
