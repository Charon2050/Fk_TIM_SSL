# Fk_TIM_SSL

修复 TIM 打开卡片分享链接（ssl.ptlogin2.qq.com/jump...）时 403 错误的浏览器扩展，支持 Mozilla Firefox、Microsoft Edge、Google Chrome（Chrome 未经测试）。

## 介绍

PC 版 TIM 在打开分享链接时，使用了一个已经被弃用的 URL 跳转链接（```https://ssl.ptlogin2.qq.com/jump?...```），导致用户点击卡片链接后，会出现 403 错误，无法正确打开页面。本扩展读取跳转链接的 u1 参数，自动跳转到正确的 URL，修复了该问题。

## 安装

### Microsoft Edge

[点击安装 Microsoft Edge 扩展：Fk_TIM_SSL](https://microsoftedge.microsoft.com/addons/detail/Fk_TIM_SSL/miaiedlpcnohdifldlikafppbehdomoh)

### Mozilla Firefox

[点击安装 Mozilla Firefox 扩展：Fk_TIM_SSL](https://addons.mozilla.org/zh-CN/firefox/addon/fk_tim_ssl/)

### Google Chrome / Edge 手动安装

在本项目的 [Release 页面](https://github.com/Charon2050/Fk_TIM_SSL/releases/latest) 下载 Fk_TIM_SSL_Chromium.zip，**解压**后打开浏览器的扩展程序管理，点击左上角的「加载已解压的扩展程序」，选中解压的文件夹，进行添加即可。

## 使用

本扩展自动生效，在打开 TIM 的卡片分享链接时，会自动跳转至对应的正确链接。


