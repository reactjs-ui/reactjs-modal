# React Modal 更新日志

## version 0.2.1  为 mask 添加自定义 class(2016-7-27)

* 当设置自定义 className 时，也可以修改 mask 的 class 样式

## version 0.2.0  完善功能(2016-7-13)

* 解决 webpack 不能正确处理 flex 相关样式加前缀 -webkit 的问题，目前把 css 单独出来，后续看插件是否支持
* 增加属性 footerStyle，可动态修改模态窗口 footer 样式
* 增加属性 hideAllModal，当打开多个模态窗口时，根据该属性来控制是否关闭所有模态窗口
* 支持多个模态窗口之间的切换
* 支持父窗口中打开子窗口
* 新增例子：“模态窗口间切换”和“模态中打开子模态窗口”
* 升级 node modules
* 修复已知 bug

## version 0.1.4  完善功能(2016-6-27)

* 补充文档

## version 0.1.3  完善功能(2016-6-24)

* 当打开弹框时，给 html 也添加样式，隐藏 body 滚动条
* 在手机端添加 touchmove事件，弹框显示时，禁止滑动，该功能利用参数preventTouchmove来控制

## version 0.1.2  完善功能(2016-6-23)

* 升级 node_modules
* 修改 webpack 配置，设置 externals 对应的 react-addons-css-transition-group，这样 react 相关文件不参与打包
* 修改例子代码

## version 0.1.0  完善功能点(2016-6-18)

* 实现 react modol，功能点包括
* 动画效果
* 弹出显示位置
* 动态设置显示或隐藏头部和尾部
* 按 ESC 键 是否关闭窗口
* 点击模态窗口其他区域是否关闭

## version 0.0.0  开启 React Modal 之旅(2016-6-4)

