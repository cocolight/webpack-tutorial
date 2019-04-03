# 第2章 基础配置

## 准备

1. 创建 `webpack-demos` 学习目录

2. 初始化生成 `package.json` 文件

```bash
npm init
```

3. 创建 `webpack-demos/src` 目录
4. 在 `src` 目录中分别创建以下两个文件

index.js

```js
import foo from './foo'

foo()

```

foo.js

```js
export default function () {
  console.log('我是 foo 模块')
}

```

5. 创建 webpack-demos/index.html  文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Hello webpack!</h1>
  <!-- 浏览器无法直接运行模块源码 -->
  <!-- <script src="src/index.js"></script> -->
</body>
</html>

```



## 使用 webpack 打包

1. 安装依赖

```bash
npm i -D webpack webpack-cli
```

2. 创建 `webpack.config.js`

```js
const path = require('path')

module.exports = {
  entry: './src/index.js', // 打包的入口
  output: {
    path: path.join(__dirname, './dist'),  // 将打包结果放到 dist 目录中
    filename: 'main.js' // 自定打包结果的文件名
  }
}

```

3. 配置 `package.json` 中的 `scripts`

```json
{
  "name": "webpack-demos",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
+   "build": "webpack --config webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "D": "^1.0.0",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0"
  }
}

```

4. 执行打包命令

```bash
npm run build
```

---

## 打包 JavaScript 模块

webpack 本身只支持 JavaScript 构建打包。

> 参考：
>
> - https://webpack.js.org/concepts/modules

- An [ES2015 `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement
  - 支持 ES6 模块
  - webpack 1 需要单独配置才可以
  - webpack 2+ 开箱即用
  - 推荐使用 ECMAScript 6
- A [CommonJS](http://www.commonjs.org/specs/modules/1.0/) `require()` statement
  - 支持 CommonJS 模块，也就是 Node.js 中使用的模块规则
- An [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) `define` and `require` statement
  - 在没有打包工具之前的一种方式
  - 它是一个 JavaScript 库，可以在浏览器端实现模块化加载
  - 目前几乎已经被淘汰了。。。
- An [`@import` statement](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) inside of a css/sass/less file.
  - 支持 css 中的 @import 语法
- An image url in a stylesheet (`url(...)`) or html (`<img src=...>`) file.
  - 支持样式文件中图片的 url 链接和 HTML 文件中 img 的 src 文件模块

---

## webpack 哲学：一切皆模块

- 不仅仅是 JavaScript
- css
- img
- json
- less
- sass
- 字体文件
- 。。。

## 核心概念：Loader

> webpack 本身只支持构建 JavaScript 资源，其它资源都需要使用不同的资源加载器

- css
  - 样式资源加载器
- img
  - 图片资源加载器
- json
  - json 资源加载器
- 。。。

## 打包模式 mode

> 参考：
>
> - <https://webpack.js.org/configuration/mode>

- production 生成模式构建
  - 构建速度慢，有优化（压缩、优化了）
- development 开发模式构建
  - 构建速度快，没有优化（没有压缩等优化）
- 如果没有指定，则默认是 production

> 建议：开发 development，生产 production



## 打包 css 资源

> 参考：
>
> - <https://webpack.js.org/guides/asset-management#loading-css>

1. 安装依赖

```bash
npm install --save-dev style-loader css-loader
```

2. 配置打包规则

```js
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
  };
```

3. 打包测试

## 打包图片

> 参考：
>
> - <https://webpack.js.org/guides/asset-management#loading-images>

1. 安装依赖

```bash
npm install --save-dev file-loader
```

2. 配置打包规则

```js
const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
+       {
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       }
      ]
    }
  };
```

3. 打包测试

---

## 打包 HTML 文件

> 参考：
>
> - <https://webpack.js.org/guides/output-management#setting-up-htmlwebpackplugin>

> 1. 我们应该把 HTML 文件也放到 dist 目录中，这样图片路径就可以解决了
> 2. 如果修改了打包结果的名字，还要手动改 HTML 文件中的引用路径
> 3. HTML也应该打包，例如压缩之类的操作

1. 安装依赖

```bash
npm install --save-dev html-webpack-plugin
```

2. 配置打包规则

```js
 const path = require('path');
+ const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    ...
+   plugins: [
+     new HtmlWebpackPlugin({
+       template: './index.html'
+     })
+   ],
    ...
  };
```

3. 打包测试

### 配置压缩

> 参考：
>
> - https://github.com/jantimon/html-webpack-plugin#minification
>
> - https://github.com/kangax/html-minifier

例如配置压缩HTML文件

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      minify: {
+       removeComments: true, // 删除注释
+       collapseWhitespace: true // 去除回车换行空格
      }
    })
  ],
  ...
};
```





---

## 自动清空 dist 目录

> 参考：
>
> - <https://webpack.js.org/guides/output-management#cleaning-up-the-dist-folder>

1. 安装依赖

```bash
npm install --save-dev clean-webpack-plugin
```

2. 配置规则

```js
 const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
+ const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    ...
    plugins: [
+     new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
    ...
  };
```

3. 打包测试

## 打包字体文件

> 参考：
>
> - <https://webpack.js.org/guides/asset-management#loading-fonts>

在配置规则的 module-rules 中增加

```js
+       {
+         test: /\.(woff|woff2|eot|ttf|otf)$/,
+         use: [
+           'file-loader'
+         ]
+       }
```



## 打包 less

> 参考：
>
> - https://webpack.js.org/loaders/less-loader/

1. 安装依赖

```bash
npm install less-loader less css-loader style-loader --save-dev
```

2. 配置

在配置规则的 module.rules 中新增

```js
{
  test: /\.less$/,
  use: [
    'style-loader', // 3. 生成 style 节点插入 DOM
    'css-loader', // 2. 将 css 转为 JavaScript 模块
    'less-loader' // 1. 将 less 转为 css
  ]
}
```



3. 测试

## 打包 sass

> 参考：
>
> - https://webpack.js.org/loaders/sass-loader

## 将 ES6 转为 ES5

> 参考：
>
> - https://webpack.js.org/loaders/babel-loader
> - <https://babeljs.io/>

1. 安装依赖

```bash
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

2. 在module.rules中新增配置

```js
{
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
```



3. 测试



### 配置 babel-polyfill

> 参考：
>
> - https://babeljs.io/docs/en/babel-polyfill

1. 安装依赖

```bash
npm install --save @babel/polyfill
```



2. 配置：在入口模块顶部加载

```js
import '@babel/polyfill'
...
```



3. 测试

### 配置 babel 缓存提高打包效率

```js
{ // 以 .mjs 或者 .js 结尾的文件使用 babel-loader 处理(ES6转ES5)
  test: /\.m?js$/,
  exclude: /(node_modules)/, // 排除不转换第三方包，一般的第三方包都是转换之后的
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'], // 转码规则
+      cacheDirectory: true // 配置babel打包结果缓存，默认会将转换结果缓存到 node_modules/.cache 目录中
    }
  }
}
```

## Source Map

> 参考：
>
> - <https://webpack.js.org/guides/development#using-source-maps>
> - <https://webpack.js.org/configuration/devtool>

当 webpack 打包源代码时，可能会很难追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置。例如，如果将三个源文件（`a.js`, `b.js` 和 `c.js`）打包到一个 bundle（`bundle.js`）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会直接指向到 `bundle.js`。你可能需要准确地知道错误来自于哪个源文件，所以这种提示这通常不会提供太多帮助。

为了更容易地追踪 error 和 warning，JavaScript 提供了 [source map](http://blog.teamtreehouse.com/introduction-source-maps) 功能，可以将编译后的代码映射回原始源代码。如果一个错误来自于 `b.js`，source map 就会明确的告诉你。

```js
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
+   devtool: 'inline-source-map',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```



## 自动监视编译构建

> 参考：
>
> - <https://webpack.js.org/guides/development#using-watch-mode>

## webpack-dev-server

> 参考：
>
> - <https://webpack.js.org/guides/development#using-webpack-dev-server>
> - <https://webpack.js.org/configuration/dev-server>

- 启动 http 服务
- 监视构建
- 自动刷新浏览器

## 配置热更新

> 参考：
>
> <https://webpack.js.org/guides/hot-module-replacement>

## 打包 .vue 资源

> 参考：
>
> - https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE

