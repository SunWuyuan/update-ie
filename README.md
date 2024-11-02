# 旧版 Internet Explorer 淘汰行动 静态版本镜像


## 项目简介
这是[Support](https://support.dmeng.net/)的静态版本，此仓库并非Support的官方仓库。Support是一个公共项目，用于提示用户升级过时的浏览器

Support的项目简介
```
本项目为公共项目，升级提示代码及静态资源托管在腾讯云及阿里云并由腾讯云及阿里云提供极速访问。
自2014年8月上线至今，已为58同城、学校安全教育平台、太原科技大学、北京高校教师党员在线、中国义乌政府门户、湛江市城市规划局、江西干部网络学院、西安市质量技术监督局、大连市干部在线学习中心、包头市产品质量计量检测所、海尔创客实验室、奇瑞新能源、西部航空、东风特种车、华农财产保险、五分旅游网、爱云校等八百多中小网站提供内页子频道升级提示或全站升级提示服务。
```

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