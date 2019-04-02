# 第1章 webpack 介绍

![webpack logo default with proper spacing on light background](./assets/logo-on-white-bg.png)

现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

模块化，让我们可以把复杂的程序细化为小的文件;
类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能转换为JavaScript文件使浏览器可以识别；
Scss，less等CSS预处理器
...
这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常繁琐的，这就为 WebPack 类的工具的出现提供了需求。

## 介绍

### 是什么

![img](./assets/what-is-webpack.png)

webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

- 打包工具
- JavaScript 模块打包之后就可以运行在浏览器
- 能做什么
  - webpack 可以当作是一个模块打包平台，但是它本身只能打包 JavaScript 模块
  - 对于其它的文件模块资源，则需要使用第三方 loader 来处理
  - JavaScript 资源打包
  - css 打包
  - 图片 打包
  - less
  - sass
  - babel EcmaScript 6 转 EcmaScript 5
  - 开发工具：http 服务器
  - 代码改变，自动刷新浏览器
  - 压缩代码
  - JavaScript 代码压缩
  - html 代码压缩
  - css  代码压缩
  - 。。。。

### 核心概念

- Entry
- Output
- Loaders
- Plugins
- Mode
- Browser Compatibility

### 其它打包工具

- [Grunt](https://github.com/gruntjs/grunt)
- [Gulp](https://github.com/gulpjs/gulp)
- [Rollup](https://github.com/rollup/rollup)
- [Browserify](https://github.com/browserify/browserify)
- [Parcel](https://github.com/parcel-bundler/parcel)
- [FIS](https://github.com/fex-team/fis3)
- ...

### 相关资源链接

- webpack 官网
  - [webpack 1.x](http://webpack.github.io/)
  - [webpack 2](https://webpack.js.org/)
- [官方教程](https://webpack.js.org/guides)
- [Github 仓库](https://github.com/webpack/webpack)
- [常用 Loaders 列表](https://webpack.js.org/loaders)
- [常用 Plugins 列表](https://webpack.js.org/plugins)


---

## Resolve

### alias

> 参考文档：
>
> 作用：配置别名，解决文件路径改变以及加载路径过深问题。

### extensions

## externals

> 配置 webpack 不打包第三方包

通常情况下我们不打包第三方包，因为第三方包太大，和 bundle 打包到一起会造成资源体积过大，所以我们还是通过 script 标签的方式把第三方资源引入到页面中，只需要通过以下配置即可，这里以 jQuery 为例：

1. 下载第三方包

```shell
npm i jquery
```

2. 在页面中引入资源

```html
<script src="node_modules/jquery/dist/jquery.js"></script>
```

3. 配置

```javascript
externals: {
  // key 是第三方包名称，value 是全局中的 jQuery 对象
  // 这里配置的含义就是：当你在代码中 import jquery 的时候，不会把 jquery 打包到 bundle 中，而是使用我指定的全局中的 jQuery 对象
  jquery: 'jQuery'
}
```

4. 加载使用

```javascript
import $ from 'jquery'

$('#app', {
  width: 200,
  height: 200,
  backgroundColor: 'pink'
})
```

5. 打包测试

```shell
npm run build
```

## `--save` 和 `--save-dev` 的区别

我们把开发工具相关的依赖信息保存到 `devDependencies` 选项中。把核心依赖（例如 vue）的依赖信息保存到 `dependencies` 选项中。

这样做的话，就是把开发依赖和核心依赖分开了，因为开发依赖在打包结束之后上线的话就不需要。

最后项目上线，我们真正需要安装发布的是 `dependencies` 依赖项中的包。

我们可以通过命令来只安装 `dependencies` 依赖项中的包：

```shell
npm install --production
```
