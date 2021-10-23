(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{486:function(t,a,s){"use strict";s.r(a);var e=s(21),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue基础题a"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue基础题a"}},[t._v("#")]),t._v(" Vue基础题a")]),t._v(" "),s("p",[t._v("天道酬勤，只要心中有信念，便能一往无前！人生当历经挫折，登顶时才能感受到，一览众山小！\n")]),t._v(" "),s("h2",{attrs:{id:"说说你对-spa-单页面的理解-它的优缺点分别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说说你对-spa-单页面的理解-它的优缺点分别是什么"}},[t._v("#")]),t._v(" 说说你对 SPA 单页面的理解，它的优缺点分别是什么？")]),t._v(" "),s("p",[t._v("SPA(single-page application)仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("用户体验好、快")]),t._v("，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；")]),t._v(" "),s("li",[t._v("基于上面一点，"),s("strong",[t._v("SPA 相对对服务器压力小")]),t._v("；")]),t._v(" "),s("li",[t._v("前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("初次加载耗时多")]),t._v("：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；")]),t._v(" "),s("li",[t._v("前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；")]),t._v(" "),s("li",[s("strong",[t._v("不利于 SEO 引擎搜索")]),t._v("：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。")])]),t._v(" "),s("h2",{attrs:{id:"如何优化-spa-应用的首屏加载速度慢的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何优化-spa-应用的首屏加载速度慢的问题"}},[t._v("#")]),t._v(" 如何优化 SPA 应用的首屏加载速度慢的问题")]),t._v(" "),s("ul",[s("li",[t._v("CDN 引用共用库")]),t._v(" "),s("li",[t._v("组件和路由懒加载")]),t._v(" "),s("li",[t._v("骨架屏、loading")])]),t._v(" "),s("p",[t._v("将公用的 JS 库通过 script 标签外部引入(CDN 的方式)，减小 app.bundle 的大小，让浏览器并行下载资源文件，提高下载速度；在配置路由时，页面和组件使用懒加载的方式引入，进一步缩小 app.bundle 的体积，在调用某个组件时再加载对应的js文件；加一个首屏 loading 图，提升用户体验；")]),t._v(" "),s("h2",{attrs:{id:"什么是-mvvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mvvm"}},[t._v("#")]),t._v(" 什么是 MVVM？")]),t._v(" "),s("p",[t._v("Model–View–ViewModel （MVVM） 是一个软件架构设计模式")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://images.dbabox.ltd/images/2021/03/05/image.png",alt:"image.png"}})]),t._v(" "),s("p",[s("strong",[t._v("（1）View 层")]),t._v("\nView 是视图层，也就是用户界面。前端主要由 HTML 和 CSS 来构建 。\n"),s("strong",[t._v("（2）Model 层")]),t._v("\nModel 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，对于前端来说就是后端提供的 api 接口。\n"),s("strong",[t._v("（3）ViewModel 层")]),t._v("\nViewModel 是由前端开发人员组织生成和维护的视图数据层。在这一层，前端开发者对从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型。需要注意的是 ViewModel 所封装出来的数据模型包括视图的状态和行为两部分，而 Model 层的数据模型是只包含状态的，比如页面的这一块展示什么，而页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为（交互），视图状态和行为都封装在了 ViewModel 里。这样的封装使得 ViewModel 可以完整地去描述 View 层。")]),t._v(" "),s("p",[t._v("MVVM 框架实现了双向绑定，这样 ViewModel 的内容会实时展现在 View 层，前端开发者再也不必低效又麻烦地通过操纵 DOM 去更新视图，MVVM 框架已经把最脏最累的一块做好了，我们开发者只需要处理和维护 ViewModel，更新数据视图就会自动得到相应更新。这样 View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环。")]),t._v(" "),s("h2",{attrs:{id:"mvc-和-mvvm-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvc-和-mvvm-区别"}},[t._v("#")]),t._v(" MVC 和 MVVM 区别")]),t._v(" "),s("p",[s("strong",[t._v("MVC")])]),t._v(" "),s("p",[t._v("MVC 全名是 Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范。")]),t._v(" "),s("ul",[s("li",[t._v("Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据")]),t._v(" "),s("li",[t._v("View（视图）：是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的")]),t._v(" "),s("li",[t._v("Controller（控制器）：是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://66.152.176.25:8000/home/images/%E9%9D%A2%E8%AF%95%E7%AF%87/mvc.png",alt:""}})]),t._v(" "),s("p",[t._v("MVC 的思想：一句话描述就是 Controller 负责将 Model 的数据用 View 显示出来，换句话说就是在 Controller 里面把 Model 的数据赋值给 View。")]),t._v(" "),s("p",[s("strong",[t._v("MVVM")])]),t._v(" "),s("p",[t._v("MVVM 新增了 VM 类")]),t._v(" "),s("ul",[s("li",[t._v("ViewModel 层：做了两件事达到了数据的双向绑定 一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://66.152.176.25:8000/home/images/%E9%9D%A2%E8%AF%95%E7%AF%87/mvvm.png",alt:""}})]),t._v(" "),s("p",[t._v("MVVM 与 MVC 最大的区别就是：它实现了 View 和 Model 的自动同步，也就是当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素，来改变 View 的显示，而是改变属性后该属性对应 View 层显示会自动改变（对应Vue数据驱动的思想）。")]),t._v(" "),s("p",[t._v("整体看来，MVVM 比 MVC 精简很多，不仅简化了业务与界面的依赖，还解决了数据频繁更新的问题，不用再用选择器操作 DOM 元素。因为在 MVVM 中，View 不知道 Model 的存在，Model 和 ViewModel 也观察不到 View，这种低耦合模式提高代码的可重用性。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：Vue 并没有完全遵循 MVVM 的思想 这一点官网自己也有说明")])]),t._v(" "),s("blockquote",[s("p",[t._v("严格的 MVVM 要求 View 不能和 Model 直接通信，而 Vue 提供了$refs 这个属性，让 Model 可以直接操作 View，违反了这一规定，所以说 Vue 没有完全遵循 MVVM。")])]),t._v(" "),s("h2",{attrs:{id:"谈谈你对-vue-生命周期的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对-vue-生命周期的理解"}},[t._v("#")]),t._v(" 谈谈你对 Vue 生命周期的理解？")]),t._v(" "),s("p",[s("strong",[t._v("（1）生命周期是什么？")]),t._v("\nVue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。")]),t._v(" "),s("p",[s("strong",[t._v("（2）各个生命周期的作用")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("生命周期")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("beforeCreate")]),t._v(" "),s("td",[t._v("组件实例被创建之初，组件的属性生效之前")])]),t._v(" "),s("tr",[s("td",[t._v("created")]),t._v(" "),s("td",[t._v("组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用")])]),t._v(" "),s("tr",[s("td",[t._v("beforeMount")]),t._v(" "),s("td",[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用")])]),t._v(" "),s("tr",[s("td",[t._v("mounted")]),t._v(" "),s("td",[t._v("el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子")])]),t._v(" "),s("tr",[s("td",[t._v("beforeUpdate")]),t._v(" "),s("td",[t._v("组件数据更新之前调用，发生在虚拟 DOM 打补丁之前")])]),t._v(" "),s("tr",[s("td",[t._v("update")]),t._v(" "),s("td",[t._v("组件数据更新之后")])]),t._v(" "),s("tr",[s("td",[t._v("activited")]),t._v(" "),s("td",[t._v("keep-alive 专属，组件被激活时调用")])]),t._v(" "),s("tr",[s("td",[t._v("deactivated")]),t._v(" "),s("td",[t._v("keep-alive 专属，组件被销毁时调用")])]),t._v(" "),s("tr",[s("td",[t._v("beforeDestory")]),t._v(" "),s("td",[t._v("组件销毁前调用")])]),t._v(" "),s("tr",[s("td",[t._v("destoryed")]),t._v(" "),s("td",[t._v("组件销毁后调用")])])])]),t._v(" "),s("h2",{attrs:{id:"在哪个生命周期内调用异步请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在哪个生命周期内调用异步请求"}},[t._v("#")]),t._v(" 在哪个生命周期内调用异步请求？")]),t._v(" "),s("p",[t._v("可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：")]),t._v(" "),s("ul",[s("li",[t._v("能更快获取到服务端数据，减少页面 loading 时间；")]),t._v(" "),s("li",[t._v("ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；")])]),t._v(" "),s("h2",{attrs:{id:"在什么阶段才能访问操作dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在什么阶段才能访问操作dom"}},[t._v("#")]),t._v(" 在什么阶段才能访问操作DOM？")]),t._v(" "),s("p",[t._v("在钩子函数 mounted 被调用前，Vue 已经将编译好的模板挂载到页面上，所以在 mounted 中可以访问操作 DOM。")]),t._v(" "),s("h2",{attrs:{id:"vue-事件绑定原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-事件绑定原理"}},[t._v("#")]),t._v(" Vue 事件绑定原理")]),t._v(" "),s("p",[t._v("原生事件绑定是通过 addEventListener 绑定给真实元素的，组件事件绑定是通过 Vue 自定义的$on 实现的。如果要在组件上使用原生事件，需要加.native 修饰符，这样就相当于在父组件中把子组件当做普通 html 标签，然后加上原生事件。\n$on、$emit 是基于发布订阅模式的，维护一个事件中心，on 的时候将事件按名称存在事件中心里，称之为订阅者，然后 emit 将对应的事件进行发布，去执行事件中心里的对应的监听器")]),t._v(" "),s("h2",{attrs:{id:"单文件组件中如何让样式只在当前组件生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单文件组件中如何让样式只在当前组件生效"}},[t._v("#")]),t._v(" 单文件组件中如何让样式只在当前组件生效")]),t._v(" "),s("blockquote",[s("p",[t._v("在组件中的 style 前面加上 scoped")])]),t._v(" "),s("h2",{attrs:{id:"scoped原理及穿透方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scoped原理及穿透方法"}},[t._v("#")]),t._v(" scoped原理及穿透方法")]),t._v(" "),s("blockquote",[s("p",[t._v("vue 中的 scoped 通过在 DOM 结构以及 css 样式上加唯一不重复的标记：data-v-hash 的方式，以保证唯一，达到样式私有模块化的目的。")])]),t._v(" "),s("h2",{attrs:{id:"在vue中如何获取dom元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在vue中如何获取dom元素"}},[t._v("#")]),t._v(" 在vue中如何获取DOM元素")]),t._v(" "),s("blockquote",[s("p",[t._v("给元素添加 ref 属性 通过 this.$refs.domName 获取")])]),t._v(" "),s("h3",{attrs:{id:"说说-vue-内置指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说说-vue-内置指令"}},[t._v("#")]),t._v(" 说说 vue 内置指令")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://66.152.176.25:8000/home/images/%E9%9D%A2%E8%AF%95%E7%AF%87/2.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"v-model-的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-model-的原理"}},[t._v("#")]),t._v(" v-model 的原理？")]),t._v(" "),s("p",[t._v("我们在 vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：")]),t._v(" "),s("ul",[s("li",[t._v("text 和 textarea 元素使用 value 属性和 input 事件；")]),t._v(" "),s("li",[t._v("checkbox 和 radio 使用 checked 属性和 change 事件；")]),t._v(" "),s("li",[t._v("select 字段将 value 作为 prop 并将 change 作为事件；")])]),t._v(" "),s("p",[t._v("以 input 表单元素为例：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'something'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    \n相当于\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something"')]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something = $event.target.value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父组件：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ModelChild v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ModelChild"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\nprops"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，\nmethods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),t._v("， "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小红'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h2",{attrs:{id:"v-show-与-v-if-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show-与-v-if-有什么区别"}},[t._v("#")]),t._v(" v-show 与 v-if 有什么区别？")]),t._v(" "),s("p",[t._v("v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。\nv-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。\n所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。")]),t._v(" "),s("p",[s("strong",[t._v("使用场景")])]),t._v(" "),s("ul",[s("li",[t._v("v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景")]),t._v(" "),s("li",[t._v("v-show 适用于需要非常频繁切换条件的场景")])]),t._v(" "),s("blockquote",[s("p",[t._v("扩展补充：display:none、visibility:hidden 和 opacity:0 之间的区别？")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://66.152.176.25:8000/home/images/%E9%9D%A2%E8%AF%95%E7%AF%87/1.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"v-if-和-v-for-的优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if-和-v-for-的优先级"}},[t._v("#")]),t._v(" v-if 和 v-for 的优先级")]),t._v(" "),s("blockquote",[s("p",[t._v("v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中。所以，不推荐v-if和v-for同时使用。如果非要一起用，可以把v-if放到外层元素，或者不用v-if，先在计算属性中筛选出数据，然后在v-for。")])]),t._v(" "),s("h2",{attrs:{id:"vue-中的-key-有什么作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-中的-key-有什么作用"}},[t._v("#")]),t._v(" Vue 中的 key 有什么作用？")]),t._v(" "),s("p",[t._v("Vue 中 key 的作用是："),s("strong",[t._v("key 是为 Vue 中 vnode 的唯一标记")]),t._v("，通过这个 key，我们的 diff 操作可以更准确、更快速")]),t._v(" "),s("ul",[s("li",[t._v("更准确：因为带 key 就不是就地复用了，在 sameNode 函数 a.key === b.key 对比中可以避免就地复用的情况。所以会更加准确")]),t._v(" "),s("li",[t._v("更快速：利用 key 的唯一性生成 map 对象来获取对应节点，比遍历方式更快")])]),t._v(" "),s("h2",{attrs:{id:"class-与-style-如何动态绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-与-style-如何动态绑定"}},[t._v("#")]),t._v(" Class 与 Style 如何动态绑定？")]),t._v(" "),s("p",[t._v("Class 可以通过对象语法和数组语法进行动态绑定：")]),t._v(" "),s("ul",[s("li",[t._v("对象写法")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{ active: isActive， 'text-danger': hasError }\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\ndata"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  isActive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("，\n  hasError"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("ul",[s("li",[t._v("数组写法")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[isActive ? activeClass : ''， errorClass]\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\ndata"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  activeClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),t._v("，\n  errorClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text-danger'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("Style 也可以通过对象语法和数组语法进行动态绑定：")]),t._v(" "),s("ul",[s("li",[t._v("对象写法")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{ color: activeColor， fontSize: fontSize + 'px' }\"")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\ndata"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  activeColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("，\n  fontSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("ul",[s("li",[t._v("数组写法")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[styleColor， styleSize]"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\ndata"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  styleColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，\n  styleSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     fontSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'23px'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"怎样理解-vue-的单向数据流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎样理解-vue-的单向数据流"}},[t._v("#")]),t._v(" 怎样理解 Vue 的单向数据流？")]),t._v(" "),s("p",[t._v("所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定："),s("strong",[t._v("父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解")]),t._v("。\n额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。\n有两种常见的试图改变一个 prop 的情形 :")]),t._v(" "),s("ul",[s("li",[t._v("这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。 在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值：")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initialCounter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("，\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    counter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initialCounter\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("ul",[s("li",[t._v("这个 prop 以一种原始的值传入且需要进行转换。 在这种情况下，最好使用这个 prop 的值来定义一个计算属性")])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'size'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("，\ncomputed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("normalizedSize")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"computed-和-watch-的区别和运用的场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-的区别和运用的场景"}},[t._v("#")]),t._v(" computed 和 watch 的区别和运用的场景？")]),t._v(" "),s("p",[s("strong",[t._v("computed")]),t._v("： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；\n"),s("strong",[t._v("watch")]),t._v("： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；")]),t._v(" "),s("p",[t._v("运用场景：")]),t._v(" "),s("ul",[s("li",[t._v("当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；")]),t._v(" "),s("li",[t._v("当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")])]),t._v(" "),s("h2",{attrs:{id:"谈谈你对-keep-alive-的了解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对-keep-alive-的了解"}},[t._v("#")]),t._v(" 谈谈你对 keep-alive 的了解？")]),t._v(" "),s("p",[s("strong",[t._v("keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染")]),t._v("，其有以下特性：")]),t._v(" "),s("ul",[s("li",[t._v("一般结合路由和动态组件一起使用，用于缓存组件；")]),t._v(" "),s("li",[t._v("提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；")]),t._v(" "),s("li",[t._v("对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated；")])]),t._v(" "),s("h2",{attrs:{id:"组件中-data-为什么是一个函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件中-data-为什么是一个函数"}},[t._v("#")]),t._v(" 组件中 data 为什么是一个函数？")]),t._v(" "),s("blockquote",[s("p",[t._v("为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？")])]),t._v(" "),s("ul",[s("li",[t._v("组件是可复用得，且对象是"),s("strong",[t._v("引用关系")])]),t._v(" "),s("li",[t._v("要保证作用域的隔离")])]),t._v(" "),s("p",[t._v("因为组件是用来复用的，且 JS 里对象是"),s("code",[t._v("引用关系")]),t._v("，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。")]),t._v(" "),s("h2",{attrs:{id:"使用过-vue-ssr-吗-说说-ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用过-vue-ssr-吗-说说-ssr"}},[t._v("#")]),t._v(" 使用过 Vue SSR 吗？说说 SSR？")]),t._v(" "),s("blockquote",[s("p",[t._v('Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。')])]),t._v(" "),s("p",[t._v("即：SSR大致的意思就是vue在客户端将标签渲染成的整个 html 片段的工作在服务端完成，服务端形成的html 片段直接返回给客户端这个过程就叫做服务端渲染。")]),t._v(" "),s("p",[t._v("服务端渲染 SSR 的优缺点如下：\n（1）服务端渲染的优点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("更好的 SEO")]),t._v("： 因为 SPA 页面的内容是通过 Ajax 获取，而搜索引擎爬取工具并不会等待 Ajax 异步完成后再抓取页面内容，所以在 SPA 中是抓取不到页面通过 Ajax 获取到的内容；而 SSR 是直接由服务端返回已经渲染好的页面（数据已经包含在页面中），所以搜索引擎爬取工具可以抓取渲染好的页面；")]),t._v(" "),s("li",[s("strong",[t._v("更快的内容到达时间（首屏加载更快）")]),t._v("： SPA 会等待所有 Vue 编译后的 js 文件都下载完成后，才开始进行页面的渲染，文件下载等需要一定的时间等，所以首屏渲染需要一定的时间；SSR 直接由服务端渲染好页面直接返回显示，无需等待下载 js 文件及再去渲染等，所以 SSR 有更快的内容到达时间；")])]),t._v(" "),s("p",[t._v("（2）服务端渲染的缺点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("更多的开发条件限制")]),t._v("： 例如服务端渲染只支持 beforCreate 和 created 两个钩子函数，这会导致一些外部扩展库需要特殊处理，才能在服务端渲染应用程序中运行；并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序 SPA 不同，服务端渲染应用程序，需要处于 Node.js server 运行环境；")]),t._v(" "),s("li",[s("strong",[t._v("更多的服务器负载")]),t._v("：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的  server 更加大量占用CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 ( high traffic ) 下使用，请准备相应的服务器负载，并明智地采用缓存策略。")])]),t._v(" "),s("p",[t._v("ssr 渲染踩坑 https://juejin.cn/post/6844903824956588040")]),t._v(" "),s("h2",{attrs:{id:"虚拟-dom-的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-的优缺点"}},[t._v("#")]),t._v(" 虚拟 DOM 的优缺点？")]),t._v(" "),s("p",[s("strong",[t._v("优点：")])]),t._v(" "),s("ul",[s("li",[t._v("保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；")]),t._v(" "),s("li",[t._v("无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；")]),t._v(" "),s("li",[t._v("跨平台： 虚拟 DOM 本质上是 JavaScript 对象，而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。")])]),t._v(" "),s("p",[s("strong",[t._v("缺点:")])]),t._v(" "),s("p",[t._v("无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。")]),t._v(" "),s("h2",{attrs:{id:"虚拟-dom-实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-实现原理"}},[t._v("#")]),t._v(" 虚拟 DOM 实现原理？")]),t._v(" "),s("p",[t._v("虚拟 DOM 的实现原理主要包括以下 3 部分：")]),t._v(" "),s("ul",[s("li",[t._v("用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；")]),t._v(" "),s("li",[t._v("diff 算法 — 比较两棵虚拟 DOM 树的差异；")]),t._v(" "),s("li",[t._v("patch 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。")])]),t._v(" "),s("h2",{attrs:{id:"vue中如何实现跨域访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue中如何实现跨域访问"}},[t._v("#")]),t._v(" vue中如何实现跨域访问")]),t._v(" "),s("ul",[s("li",[t._v("开发环境：配置vue.config.js proxy代理")]),t._v(" "),s("li",[t._v("生产环境：配置nginx代理")])]),t._v(" "),s("h2",{attrs:{id:"路由懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由懒加载"}},[t._v("#")]),t._v(" 路由懒加载")]),t._v(" "),s("blockquote",[s("p",[t._v("在单页应用中，如果没有应用懒加载，运用webpack打包后的文件很大，进入首页时，加载的内容过多，不利于用户体验。而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力。原理：vue异步组件技术：异步加载，vue-router配置路由 , 使用vue的异步组件技术 , 实现按需加载")])]),t._v(" "),s("h2",{attrs:{id:"组件中写name选项有什么作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件中写name选项有什么作用"}},[t._v("#")]),t._v(" 组件中写name选项有什么作用")]),t._v(" "),s("blockquote",[s("p",[t._v("项目使用 keep-alive 时，可搭配组件的 name 进行缓存过滤。DOM 做递归组件时需要调用自身 name。")])]),t._v(" "),s("h2",{attrs:{id:"你有对-vue-项目进行哪些优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你有对-vue-项目进行哪些优化"}},[t._v("#")]),t._v(" 你有对 Vue 项目进行哪些优化？")]),t._v(" "),s("p",[s("strong",[t._v("编码阶段")])]),t._v(" "),s("ul",[s("li",[t._v("尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher")]),t._v(" "),s("li",[t._v("v-if和v-for不能连用")]),t._v(" "),s("li",[t._v("如果需要使用v-for给每项元素绑定事件时使用事件代理")]),t._v(" "),s("li",[t._v("SPA 页面采用keep-alive缓存组件")]),t._v(" "),s("li",[t._v("在更多的情况下，使用v-if替代v-show")]),t._v(" "),s("li",[t._v("key保证唯一")]),t._v(" "),s("li",[t._v("使用路由懒加载、异步组件")]),t._v(" "),s("li",[t._v("防抖、节流")]),t._v(" "),s("li",[t._v("第三方模块按需导入")]),t._v(" "),s("li",[t._v("长列表滚动到可视区域动态加载")]),t._v(" "),s("li",[t._v("图片懒加载")])]),t._v(" "),s("blockquote",[s("p",[t._v("通过 keep-alive用来缓存组件，避免了每次点击其他页面都要加载，减少性能消耗和提高用户体验，下图缓存整个路由视图(所有页面)，也可以缓存单个组件；通过vue-lazyload组件，npm安装：npm i vue-lazyload\n"),s("img",{attrs:{src:"https://images.dbabox.ltd/images/2021/03/11/image.png",alt:"image.png"}}),t._v(" "),s("img",{attrs:{src:"https://images.dbabox.ltd/images/2021/03/11/imagea12b973360b4c5e5.png",alt:"imagea12b973360b4c5e5.png"}})])]),t._v(" "),s("p",[s("strong",[t._v("SEO优化")])]),t._v(" "),s("ul",[s("li",[t._v("预渲染")]),t._v(" "),s("li",[t._v("服务端渲染SSR")])]),t._v(" "),s("p",[s("strong",[t._v("打包优化")])]),t._v(" "),s("ul",[s("li",[t._v("压缩代码")]),t._v(" "),s("li",[t._v("Tree Shaking/Scope Hoisting")]),t._v(" "),s("li",[t._v("使用cdn加载第三方模块")]),t._v(" "),s("li",[t._v("多线程打包happypack")]),t._v(" "),s("li",[t._v("splitChunks抽离公共文件")]),t._v(" "),s("li",[t._v("sourceMap优化")])]),t._v(" "),s("p",[s("strong",[t._v("用户体验")])]),t._v(" "),s("ul",[s("li",[t._v("骨架屏")]),t._v(" "),s("li",[t._v("PWA")])]),t._v(" "),s("h2",{attrs:{id:"vue-中使用了哪些设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-中使用了哪些设计模式"}},[t._v("#")]),t._v(" vue 中使用了哪些设计模式")]),t._v(" "),s("ul",[s("li",[t._v("1.工厂模式 - 传入参数即可创建实例\n虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode")]),t._v(" "),s("li",[t._v("2.单例模式 - 整个程序有且仅有一个实例\nvuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉")]),t._v(" "),s("li",[t._v("3.发布-订阅模式 (vue 事件机制)")]),t._v(" "),s("li",[t._v("4.观察者模式 (响应式数据原理)")]),t._v(" "),s("li",[t._v("5.装饰模式: (@装饰器的用法)")]),t._v(" "),s("li",[t._v("6.策略模式 策略模式指对象有某个行为,但是在不同的场景中,该行为有不同的实现方案-比如选项的合并策略")])])])}),[],!1,null,null,null);a.default=r.exports}}]);