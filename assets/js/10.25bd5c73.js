(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{235:function(i,l,v){"use strict";v.r(l);var e=v(4),_=Object(e.a)({},function(){var i=this,l=i.$createElement,v=i._self._c||l;return v("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[v("h1",{attrs:{id:"第7章-webpack-性能优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第7章-webpack-性能优化","aria-hidden":"true"}},[i._v("#")]),i._v(" 第7章 webpack 性能优化")]),i._v(" "),v("ul",[v("li",[i._v("开发配置文件："),v("code",[i._v("webpack.dev.conf.js")])]),i._v(" "),v("li",[i._v("发布配置文件："),v("code",[i._v("webpack.prod.conf.js")])]),i._v(" "),v("li",[i._v("使用 url-loader 减少网站中图片资源的请求数量\n"),v("ul",[v("li",[i._v("小图片直接 base64 内置到模板中")]),i._v(" "),v("li",[i._v("大图片拷贝到结果目录中")]),i._v(" "),v("li",[i._v("把图片资源分离到特定的目录中")])])]),i._v(" "),v("li",[i._v("使用 "),v("code",[i._v("clean-webpack-plugin")]),i._v(" 清除 "),v("code",[i._v("dist")]),i._v(" 目录")]),i._v(" "),v("li",[i._v("分离第三方包（解决 js 文件体积过大的问题）\n"),v("ul",[v("li",[i._v("多入口")]),i._v(" "),v("li",[v("code",[i._v("webpack.optimize.CommonsChunkPlugin()")])])])]),i._v(" "),v("li",[i._v("压缩 html\n"),v("ul",[v("li",[i._v("减小文件体积，提高加载速度")])])]),i._v(" "),v("li",[i._v("压缩 JavaScript\n"),v("ul",[v("li",[i._v("减小文件体积，提高加载速度")]),i._v(" "),v("li",[v("code",[i._v("webpack.optimize.UglifyJsPlugin()")])]),i._v(" "),v("li",[v("code",[i._v("webpack.optimize.DedupePlugin()")]),i._v(" 配置插件环境变量")]),i._v(" "),v("li",[i._v("把 JavaScript 分离到指定的目录中")])])]),i._v(" "),v("li",[i._v("抽离 CSS 样式文件\n"),v("ul",[v("li",[i._v("为了让浏览器尽快的优先加载样式，也是为了解决js 文件体积过大的问题")]),i._v(" "),v("li",[i._v("把 css 分离到指定的目录结构中")]),i._v(" "),v("li",[i._v("extract-text-webpack-plugin")])])]),i._v(" "),v("li",[i._v("压缩抽取出来的 CSS 文件：https://github.com/webpack-contrib/css-loader#minimize\n"),v("ul",[v("li",[i._v("压缩 CSS 也是为了减小文件题解，提高响应速度")])])])])])},[],!1,null,null,null);l.default=_.exports}}]);