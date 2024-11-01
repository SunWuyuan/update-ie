function replaceSiteUrl() {
    // 处理协议和主机名，确保兼容IE8及以下版本
    var protocol = window.location.protocol;      // 获取协议 (http: 或 https:)
    var hostname = window.location.hostname;      // 获取主机名
    var port = window.location.port ? ":" + window.location.port : ""; // 获取端口（如果存在）
    var origin = protocol + "//" + hostname + port; // 手动组合完整URL

    var spans;
    // 兼容IE8及以下，使用 getElementsByTagName 代替 getElementsByClassName
    if (document.getElementsByClassName) {
        spans = document.getElementsByClassName('siteurl'); // 获取所有 class 为 'siteurl' 的元素
    } else {
        spans = document.getElementsByTagName('span'); // 获取所有 <span> 元素，再进行过滤
    }

    // 遍历找到所有 class 为 'siteurl' 的 <span> 元素并替换内容
    for (var i = 0; i < spans.length; i++) {
        // 兼容IE8的class检查
        if (spans[i].className === "siteurl" || (spans[i].className && spans[i].className.indexOf("siteurl") > -1)) {
            // 使用 textContent 或 innerText 替换内容，兼容旧版IE
            if (spans[i].textContent !== undefined) {
                spans[i].textContent = origin; // 非IE
            } else {
                spans[i].innerText = origin;   // 旧版IE
            }
        }
    }
}

// 页面加载后运行
window.onload = replaceSiteUrl;