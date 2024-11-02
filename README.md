# 旧版 Internet Explorer 淘汰行动 静态版本镜像

这是[Support](https://support.dmeng.net/)的静态版本，此仓库并非Support的官方仓库。

## 项目简介
本项目旨在为使用旧版 Internet Explorer 的用户提供升级提示。项目的静态资源托管在腾讯云和阿里云，确保快速访问。

自2014年8月上线以来，本项目已为包括58同城、学校安全教育平台、太原科技大学等在内的800多家中小网站提供升级提示服务，帮助用户顺利过渡到更现代的浏览器。

## 目录结构
```plaintext
update-ie/
├── css/
├── ie-alert-warning/
├── images/
├── js
│   ├── backup-need.js            # 已删除
│   ├── er3eport.js               # 已删除
│   ├── er3eport_2.js             # 已删除
│   ├── hello.world.js            # 已删除
│   ├── hello.world_2.js          # 已删除
│   └── replaceSiteUrl.js         # 新增功能
├── 360se-renderer.html           # 已修改
├── conditional-comment.html      # 已修改
├── end-of-ie-support.html        # 已修改
├── favicon.ico
├── ie-alert-warning-example.html  # 已修改
├── ie-alert-warning.html         # 已修改
├── ie-update-warning.html        # 已修改
├── index.html                    # 已修改
├── kill-old-versions-of-ie.html  # 已修改
├── README.md                     # 新增说明文件
├── upgrade-your-browser.html     # 已修改
└── x-ua-compatible.html          # 已修改
```

## 修改说明
- **功能删除**: 删除多个追踪器及指向恶意软件网站的链接。
- **功能新增**: 添加了 `replaceSiteUrl.js` 文件，添加了指向 Microsoft Edge 下载页面的链接。
- **文件修改**: 多个 HTML 文件进行了相应的修改，以提升用户体验和兼容性。

## 使用说明
用户可根据需求自由部署此静态版本。只需下载该仓库的文件并上传至服务器即可使用。

如有问题或建议，欢迎随时反馈。