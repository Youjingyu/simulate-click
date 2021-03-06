# simulate-click
* 一个自动触发页面点击事件的chrome插件
* 自动完成开发单页面web应用时繁琐的点击操作，对多页面应用依然有效

## 使用
* 安装：将simulate-click.crx拖入chrome的扩展程序界面，即可安装
* 打开本地开发的页面，点击插件icon，输入依次需要点击的dom元素id，以及每次点击之间的延时，如下图所示

![](https://github.com/Youjingyu/simulate-click/blob/master/example1.png)

* 刷新页面，插件会依次触发输入id对应的dom元素的点击事件

## 注意
* 插件只监听`http://localhost`、`file://`两个类型的url，如果需要监听其他url，可以修改manifest.json里的content_scripts.matches数组，然后用chrome重新打包插件
* 如果不需要延时，请输入0；不输入延时，输入的id不会生效（第一个id的延时，是页面加载完成后，到触发其点击事件之间的时间）
* 如果输入的id不存在，后续id的点击事件依然会触发
