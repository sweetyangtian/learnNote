(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{57:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"fontsize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fontsize","aria-hidden":"true"}},[t._v("#")]),t._v(" FontSize")]),a("blockquote",[a("p",[t._v("网易做法：css中使用的尺寸与设计稿保持一致")])]),a("p",[t._v("将页面宽度设为屏幕宽度，通过设置html的font-size与使用rem实现尺寸与设计稿一致")]),a("p",[t._v("● 假设设计稿宽度为640px，那么以设计稿为准，设置body的宽度为640px")]),a("p",[t._v("● 由于使用rem单位，因此需要设置html标签的font-size")]),a("p",[t._v("● 为计算方便，取100px为参照，所以body的宽度为6.4rem")]),a("p",[t._v("● 由于设备的dip!=设计稿宽度，因此font-size=deviceWidth/6.4")]),a("p",[t._v("● css尺寸为：设计稿标注尺寸/100")]),a("blockquote",[a("p",[t._v("淘宝做法：页面大小与设计稿保持一致")])]),a("p",[t._v("设置meta viewport中的 scale 保证页面大小与设计稿一致，使用rem")]),a("p",[t._v("● meta viewport中device-width的算法为：设备的物理分辨率 / (devicePixelRatio * scale)")]),a("p",[t._v("● 而每台设备的devicePixelRatio可通过 window.devicePixelRatio 获取")]),a("p",[t._v("● JavaScript动态计算设置scale，包括initial-scale，maximum-scale，minimum-scale")]),a("p",[t._v("● 动态设置html的font-size，为屏幕分辨率/10")]),a("p",[t._v("● css尺寸为：设计稿标注尺寸/html的font-size")]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("适配-flexible方案-淘宝")])])]),a("blockquote",[a("p",[t._v("字号用px来作为单位")])]),a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token atrule-line"}},[a("span",{attrs:{class:"token atrule"}},[t._v("@function")]),t._v(" px($val) {")]),t._v("\n"),a("span",{attrs:{class:"token atrule-line"}},[t._v("    "),a("span",{attrs:{class:"token atrule"}},[t._v("@return")]),t._v(" $val/$basewidth*16"),a("span",{attrs:{class:"token atrule"}},[t._v("+")]),t._v("rem;")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token variable-line"}},[a("span",{attrs:{class:"token variable"}},[t._v("$basewidth")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("640px; "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("设计稿宽度")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token property"}},[t._v("px(86px);")])]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("原理：选择16作为因子，font-size = W / 16；比例为640/16=40;所以，页面rem换算为：设计稿px值/40;")]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token string"}},[t._v("'px'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("640")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'px'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("640")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("16")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'%'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("blockquote",[a("p",[t._v("PostCss的插件 postcss-px2rem")])]),a("blockquote",[a("p",[t._v("单位 vw ----它的宽度等于1%整个屏幕的宽度-- --插件 postcss-px-to-viewport")])]),a("h2",{attrs:{id:"适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适配","aria-hidden":"true"}},[t._v("#")]),t._v(" 适配")]),a("blockquote",[a("p",[a("a",{attrs:{href:"http://blog.csdn.net/crper/article/details/51902681",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端爬坑记")])])]),a("p",[t._v("● Flex兼容")]),a("p",[t._v("● IOS的H5页面scroll不流畅解决方案")]),a("p",[t._v("● IOS 遮罩层较好方案")]),a("p",[t._v("● IOS滚动窗滑动到底部还能弹窗拖拉的奇葩修复")]),a("p",[t._v("● ios和android下触摸元素时出现半透明灰色遮罩")]),a("p",[t._v("● IOS 默认输入框内阴影重置")]),a("p",[t._v("● 旋转屏幕时，字体大小调整的问题")]),a("p",[t._v("● 默认启用GPU渲染页面")]),a("p",[t._v("● transition闪屏")]),a("p",[t._v("● placeholder的颜色值改变")]),a("p",[t._v("● 移动端禁止选中内容")]),a("p",[t._v("● IOS禁止保存或拷贝图像")]),a("p",[t._v("● 常用的移动端meta")]),a("p",[t._v("● IOS中input键盘事件调用缓慢")]),a("p",[t._v("● 页面高度渲染错误")]),a("p",[t._v("● 怪异悬浮的表单")]),a("blockquote",[a("p",[t._v("1px 问题")])]),a("p",[t._v("使用postcss-write-svg插件")]),a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{attrs:{class:"token atrule-line"}},[a("span",{attrs:{class:"token atrule"}},[t._v("@svg")]),t._v(" 1px-border {")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[t._v("  "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px;")]),t._v("\n"),a("span",{attrs:{class:"token atrule-line"}},[t._v("  "),a("span",{attrs:{class:"token atrule"}},[t._v("@rect")]),t._v(" {")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[t._v("    "),a("span",{attrs:{class:"token property"}},[t._v("fill")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" var(--color, black);")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[t._v("    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v("; "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v(".example {")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[t._v("  "),a("span",{attrs:{class:"token property"}},[t._v("border")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid transparent;")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[t._v("  "),a("span",{attrs:{class:"token property"}},[t._v("border-image")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" svg(1px-border param(--color #00b1ff)) 2 2 stretch;")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v("或者")]),t._v("\n"),a("span",{attrs:{class:"token atrule-line"}},[a("span",{attrs:{class:"token atrule"}},[t._v("@svg")]),t._v(" square {")]),t._v("\n"),a("span",{attrs:{class:"token atrule-line"}},[t._v("    "),a("span",{attrs:{class:"token atrule"}},[t._v("@rect")]),t._v(" {")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[t._v("        "),a("span",{attrs:{class:"token property"}},[t._v("fill")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" var(--color, black);")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[t._v("        "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[t._v("        "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token selector"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v("#example {")]),t._v("\n"),a("span",{attrs:{class:"token property-line"}},[t._v("    "),a("span",{attrs:{class:"token property"}},[t._v("background")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white svg(square param(--color #00b1ff));")]),t._v("\n"),a("span",{attrs:{class:"token selector"}},[t._v("}")]),t._v("\n")])]),a("blockquote",[a("p",[t._v("小程序适配-----官方  rpx")])]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://juejin.im/entry/5aa09c3351882555602077ca",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在Vue项目中使用vw实现移动端适配-----大漠")])])]),a("h2",{attrs:{id:"手机端常见问题解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手机端常见问题解决","aria-hidden":"true"}},[t._v("#")]),t._v(" 手机端常见问题解决")]),a("ol",[a("li",[t._v("meta")])]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=1,width=device-width,user-scalable=no,maximum-scale=1"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("applicable-device"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pc,mobile"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("表示页面同时适合在移动设备和PC上进行浏览。\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在使用百度站长平台链接提交工具的sitemp进行提交时，要做mobile type标记，具体取值：")])]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("mobile:")]),t._v("mobile")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pc,mobile"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  其他网页取值如下：\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("mobile:")]),t._v("mobile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" ：移动网页\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("mobile:")]),t._v("mobile")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mobile"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" ：移动网页\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("mobile:")]),t._v("mobile")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("htmladapt"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("：代码适配\n")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("图片处理")])]),a("p",[t._v("用同等比例的图片在PC机上很清楚，但是手机上很模糊，是devicePixelRatio作怪，因为手机分辨率太小，想让图片在手机里显示更为清晰，必须使用2x的背景图来代替img标签（一般情况都是用2倍）。例如一个div的宽高是100100，背景图必须得200200，然后background-size:contain;，这样显示出来的图片就比较清晰了。")]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("html5调用安卓或者ios的拨号功能   "),a("a",{attrs:{href:"tel:10010"}},[t._v("10010")])])]),a("li",[a("p",[t._v("禁止复制、选中文本")])])]),a("p",[t._v("Element {\n-webkit-user-select: none;\n-moz-user-select: none;\n-khtml-user-select: none;\nuser-select: none;\n}")]),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("某些Android手机圆角失效  background-clip: padding-box;")])]),a("li",[a("p",[t._v("iOS下页面启动加载时显示的画面图片，避免加载时的白屏。")])])]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("apple-touch-startup-image"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("start.png"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("图片上传")])]),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000006140042",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000006140042")])]),a("h2",{attrs:{id:"调试工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 调试工具")]),a("p",[a("a",{attrs:{href:"https://github.com/wuchangming/spy-debugger",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wuchangming/spy-debugger")])]),a("p",[t._v("Vconsole")])])}],!1,null,null,null);s.default=e.exports}}]);