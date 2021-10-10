(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{474:function(t,s,a){"use strict";a.r(s);var e=a(21),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("你对计算机网络的认识怎么样\n又是一道探底的题，判断能否从这里给你出题考察你")]),t._v(" "),a("p",[t._v("4.讲述一下计算机网络的七层\n应用层、表示层、会话层、传输层、网络层、数据链路层、物理层")]),t._v(" "),a("p",[t._v("5.HTTPS是什么\nHTTPS即加密的HTTP，HTTPS并不是一个新协议，而是HTTP+SSL（TLS）。原本HTTP先和TCP（假定传输层是TCP协议）直接通信，而加了SSL后，就变成HTTP先和SSL通信，再由SSL和TCP通信，相当于SSL被嵌在了HTTP和TCP之间")]),t._v(" "),a("p",[t._v("6.介绍几种常见的状态码\n2XX系列：代表请求已成功被服务器接收、理解、并接受。\n200状态码：表示请求已成功，请求所希望的响应头或数据体将随此响应返回\n201状态码：表示请求成功并且服务器创建了新的资源，且其 URI 已经随Location 头信息返回。\n3XX系列：代表需要客户端采取进一步的操作才能完成请求，这些状态码用来重定向，后续的请求地址（重定向目标）在本次响应的 Location 域中指明。\n301状态码：被请求的资源已永久移动到新位置。服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。\n302状态码：请求的资源临时从不同的URI响应请求，但请求者应继续使用原有位置来进行以后的请求。\n304状态码：自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。\n4XX系列：表示请求错误。代表了客户端看起来可能发生了错误，妨碍了服务器的处理。\n401状态码：请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。\n403状态码：服务器已经理解请求，但是拒绝执行它。与401响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。\n404状态码：请求失败，请求所希望得到的资源未被在服务器上发现。\n5xx系列：代表了服务器在处理请求的过程中有错误或者异常状态发生，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理。\n500状态码：服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。\n503状态码：由于临时的服务器维护或者过载，服务器当前无法处理请求。")]),t._v(" "),a("h1",{attrs:{id:"能不能说一说浏览器的本地存储-各自优劣如何"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#能不能说一说浏览器的本地存储-各自优劣如何"}},[t._v("#")]),t._v(" 能不能说一说浏览器的本地存储？各自优劣如何？")]),t._v(" "),a("blockquote",[a("p",[t._v("浏览器的本地存储主要分为 Cookie、WebStorage 和 IndexedDB，其中 WebStorage 又可以分为 localStorage 和 sessionStorage。接下来我们就来一一分析这些本地存储方案。")])]),t._v(" "),a("h2",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),a("p",[a("code",[t._v("Cookie")]),t._v("最开始被设计出来其实并不是来做本地存储的，而是为了弥补 HTTP 在状态管理上的不足。(之前也有论述 HTTP 协议的文章)")]),t._v(" "),a("p",[t._v("HTTP 协议是一个无状态协议，客户端向服务器发请求，服务器返回响应，故事就这样结束了，但是下次发请求如何让服务端知道客户端是谁呢？ 这种背景下，就产生了 Cookie。Cookie 本质上就是浏览器里面存储的一个很小的文本文件，内部以键值对的方式来存储，向同一个域名下发送请求，都会携带相同的 Cookie，服务器拿到 Cookie 进行解析，便能拿到客户端的状态。\nCookie 的作用很好理解，就是用来做状态存储的，但它也是有诸多致命的缺陷的：")]),t._v(" "),a("ul",[a("li",[t._v("容量缺陷。Cookie 的体积上限只有 4KB，只能用来存储少量的信息。")]),t._v(" "),a("li",[t._v("性能缺陷。Cookie 紧跟域名，不管域名下面的某一个地址需不需要这个 Cookie ，请求都会携带上完整的 Cookie，这样随着请求数的增多，其实会造成巨大的性能浪费的。")]),t._v(" "),a("li",[t._v("安全缺陷。由于 Cookie 以纯文本的形式在浏览器和服务器中传递，很容易被非法用户截获，然后进行一系列的篡改，在 Cookie 的有效期内重新发送给服务器，这是相当危险的。另外，在 HttpOnly 为 false 的情况下，Cookie 信息能直接通过 JS 脚本来读取。")])]),t._v(" "),a("h2",{attrs:{id:"localstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" localStorage")]),t._v(" "),a("ul",[a("li",[t._v("Cookie 异同\n"),a("ul",[a("li",[t._v("localStorage 有一点跟 Cookie 一样，就是针对一个域名，即在同一个域名下，会存储相同的一段 localStorage")]),t._v(" "),a("li",[t._v("容量。localStorage 的容量上限为 5M，相比于 Cookie 的 4K 大大增加。对于一个域名是持久存储的。")]),t._v(" "),a("li",[t._v("只存在客户端，默认不参与与服务端的通信。这样就很好地避免了 Cookie 带来的性能问题和安全问题。")]),t._v(" "),a("li",[t._v("接口封装。通过 localStorage 暴露在全局，并通过它的 setItem 和 getItem 等方法进行操作，非常方便。")])])]),t._v(" "),a("li",[t._v("操作方式")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sanyuan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sanyuan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("PS：存进去需要"),a("code",[t._v("JSOM.stringify")]),t._v("，转换为字符串，取出来需要"),a("code",[t._v("JSON.parse")]),t._v(",转换为对象。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("从这里可以看出，localStorage 其实存储的都是字符串，如果是存储对象需要调用 JSON 的 stringify 方法，并且用 JSON.parse 来解析成对象。")]),t._v(" "),a("h2",{attrs:{id:"sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" sessionStorage")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("特点")]),t._v(" "),a("ul",[a("li",[t._v("容量。容量上限也为 5M。")]),t._v(" "),a("li",[t._v("只存在客户端，默认不参与与服务端的通信。")]),t._v(" "),a("li",[t._v("接口封装。除了 sessionStorage 名字有所变化，存储方式、操作方式均和 localStorage 一样。")])])])]),t._v(" "),a("p",[t._v("但 "),a("code",[t._v("sessionStorage")]),t._v(" 和 "),a("code",[t._v("localStorage")]),t._v(" 有一个本质的区别，那就是前者只是会话级别的存储，并不是持久化存储。会话结束，也就是页面关闭，这部分 sessionStorage 就不复存在了。")]),t._v(" "),a("ul",[a("li",[t._v("应用场景\n"),a("ul",[a("li",[t._v("可以用它对表单信息进行维护，将表单信息存储在里面，可以保证页面即使刷新也不会让之前的表单信息丢失。")]),t._v(" "),a("li",[t._v("可以用它存储本次浏览记录。如果关闭页面后不需要这些记录，用 sessionStorage 就再合适不过了。事实上微博就采取了这样的存储方式。")])])])]),t._v(" "),a("h2",{attrs:{id:"indexeddb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[t._v("#")]),t._v(" IndexedDB")]),t._v(" "),a("p",[t._v("IndexedDB 是一种低级 API,用于客户端存储大量结构化数据(包括, 文件/ blobs)。该 API 使用索引来实现对该数据的高性能搜索。")]),t._v(" "),a("h2",{attrs:{id:"各主流浏览器的本地缓存大小相同吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各主流浏览器的本地缓存大小相同吗"}},[t._v("#")]),t._v(" 各主流浏览器的本地缓存大小相同吗")]),t._v(" "),a("ul",[a("li",[t._v("一般浏览器为 5M 左右")]),t._v(" "),a("li",[t._v("微信浏览器可能只有 2.5M 左右")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("浏览器中各种本地存储和缓存技术的发展，给前端应用带来了大量的机会，PWA 也正是依托了这些优秀的存储方案才得以发展起来。重新梳理一下这些本地存储方案:")]),t._v(" "),a("ul",[a("li",[t._v("cookie 并不适合存储，而且存在非常多的缺陷。")]),t._v(" "),a("li",[t._v("Web Storage 包括 localStorage 和 sessionStorage, 默认不会参与和服务器的通信。")]),t._v(" "),a("li",[t._v("IndexedDB 为运行在浏览器上的非关系型数据库，为大型数据的存储提供了接口")])])])}),[],!1,null,null,null);s.default=n.exports}}]);