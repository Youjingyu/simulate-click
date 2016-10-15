# simulate-click
* 一个自动触发页面点击事件的chrome插件
* 自动触发开发单页面web应用时繁琐的点击操作，对多页面应用依然有效
<br>

## 使用
* 安装：将simulate-click.crx拖入chrome的扩展程序界面，即可安装
* 打开本地开发的页面，点击插件icon，输入依次需要点击的dom元素id，以及每次点击之间的延时，如下图所示
<br>
![image](https://github.com/Youjingyu/simulate-click/blob/master/example.png)
<br>
* 刷新页面，插件会自动依次点击输入id对应的dom元素
<br>

## 注意
* 插件只监听http://localhost、file://两个类型的url，如果需要监听其他url，可以修改manifest.json里的content_scripts.matches数组，然后用chrome重新打包插件
* 如果不需要延时，请输入0；不输入延时，输入的id不会生效
* 如果输入的id不存在，后续id的点击事件依然会触发
