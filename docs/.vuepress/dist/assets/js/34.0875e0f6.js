(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{450:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),a("h2",{attrs:{id:"图片未加载前自动撑开元素高度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片未加载前自动撑开元素高度"}},[t._v("#")]),t._v(" # 图片未加载前自动撑开元素高度")]),t._v(" "),a("p",[t._v("在移动端开发中，有一些元素是根据图片高度来自动撑开的 ，高度不能写死（如轮播图的外层元素）。在网络较慢的情况下，图片加载需要一些时间，此时该元素的高度没有被撑开，在网页布局上会有一些不想看到的效果。\n"),t._v("\n这种情况我们可以设置如下样式来设置该元素的高度：")]),t._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),t._v(" hidden")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token unit"}},[t._v("%")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26.66")]),a("span",{pre:!0,attrs:{class:"token unit"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个数值是图片的高宽比，即 高/宽")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#eee")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("上面代码中，"),a("code",[t._v("padding-bottom")]),t._v(" 的取值是图片的高宽比（即，高/宽），它会根据 "),a("code",[t._v("width")]),t._v("值的"),a("code",[t._v("26.66%")]),t._v("计算，最终元素的高度会和图片加载完成后的高度一致。")]),t._v(" "),a("p",[t._v("也可以使用"),a("code",[t._v("vw")]),t._v("的方法，但在一些浏览器可能有兼容性问题：")]),t._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token unit"}},[t._v("%")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26.66")]),a("span",{pre:!0,attrs:{class:"token unit"}},[t._v("vw")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#eee")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("blockquote",[a("p",[a("code",[t._v("vw")]),t._v("，viewpoint width，视窗宽度，1vw=视窗宽度的1%")]),t._v(" "),a("p",[a("code",[t._v("vh")]),t._v("，viewpoint height，视窗高度，1vh=视窗高度的1%")]),t._v(" "),a("p",[t._v("更多 "),a("a",{attrs:{href:"https://www.runoob.com/cssref/css-units.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS单位"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"object-fit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-fit"}},[t._v("#")]),t._v(" object-fit")]),t._v(" "),a("blockquote",[a("p",[t._v("给图片设置宽高的时候，大图片放置在填充区域可能会产生拉伸的现象；加上 object-fit：cover 是图片自适应；使图片内容在保持其宽高比的同时填充元素的整个内容框。")])]),t._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul li img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-fit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("blockquote",[a("p",[t._v("object-fit 还有一个配套属性 object-position，它可以控制图片在其内容框中的位置。（类似于 background-position），m默认是 object-position: 50% 50%，如果你不希望图片居中展示，可以使用它去改变图片实际展示的 position 。")])]),t._v(" "),a("h2",{attrs:{id:"考虑屏幕-dpr-响应式图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#考虑屏幕-dpr-响应式图片"}},[t._v("#")]),t._v(" 考虑屏幕 dpr -- 响应式图片")]),t._v(" "),a("blockquote",[a("p",[t._v("在移动端或者一些高清的 PC 屏幕（苹果的 MAC Book），屏幕的 dpr 可能大于 1。这种时候，我们可能还需要考虑利用多倍图去适配不同 dpr 的屏幕。正好，"),a("img"),t._v(" 标签是有提供相应的属性 srcset 让我们进行操作的.")])]),t._v(" "),a("div",{staticClass:"language-HTML line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sizes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 600px) 600px, 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo@1x.png 300w,\n                  photo@2x.png 600w,\n                  photo@3x.png 1200w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("利用 srcset，我们可以给不同 dpr 的屏幕，提供最适合的图片。")])]),t._v(" "),a("h2",{attrs:{id:"图片丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片丢失"}},[t._v("#")]),t._v(" 图片丢失")]),t._v(" "),a("ul",[a("li",[t._v("利用图片加载失败，触发 "),a("img"),t._v(" 元素的 onerror 事件，给加载失败的 "),a("img"),t._v(" 元素新增一个样式类")]),t._v(" "),a("li",[t._v("利用新增的样式类，配合 "),a("img"),t._v(" 元素的伪元素，展示默认兜底图的同时，还能一起展示 "),a("img"),t._v(" 元素的 alt 信息")])]),t._v(" "),a("div",{staticClass:"language-HTML line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("图片描述"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onerror")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img.error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img.error::before")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 定位代码 **/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error-default.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img.error::after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 定位代码 **/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);