# 第5章 常用打包环境配置

## 配置 mode

> 作用：打包模式
>
> 参考文档：https://webpack.js.org/configuration/mode

| Option        | Description                                |
| :------------ | :----------------------------------------- |
| `development` | 开发模式，更快的构建速度，建议开发构建使用 |
| `production`  | 生产模式，更好的构建结果，建议生产构建使用 |
| `none`        | 默认优化选项                               |

如果未设置，则webpack将production设置为mode的默认值。

## 配置 Source Map

当 webpack 打包源代码时，可能会很难追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置。例如，如果将三个源文件（`a.js`, `b.js` 和 `c.js`）打包到一个 bundle（`bundle.js`）中，而其中一个源文件包含一个错误，那么堆栈跟踪就会直接指向到 `bundle.js`。你可能需要准确地知道错误来自于哪个源文件，所以这种提示这通常不会提供太多帮助。

为了更容易地追踪 error 和 warning，JavaScript 提供了 [source map](http://blog.teamtreehouse.com/introduction-source-maps) 功能，可以将编译后的代码映射回原始源代码。如果一个错误来自于 `b.js`，source map 就会明确的告诉你。



扩展阅读：

- [JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
- [An Introduction to Source Maps](https://blog.teamtreehouse.com/introduction-source-maps)
  - [译文](https://juejin.im/post/5bd65e1ae51d457aa071feaa)

## 使用 watch 监视模式

```json
  {
    "name": "development",
    "version": "1.0.0",
    "description": "",
    "main": "webpack.config.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "watch": "webpack --watch",
      "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "clean-webpack-plugin": "^2.0.0",
      "css-loader": "^0.28.4",
      "csv-loader": "^2.1.1",
      "file-loader": "^0.11.2",
      "html-webpack-plugin": "^2.29.0",
      "style-loader": "^0.18.2",
      "webpack": "^3.0.0",
      "xml-loader": "^1.2.1"
    }
  }
```

## 使用 webpack-dev-server

> https://webpack.js.org/configuration/dev-server/

- 安装依赖
- 配置
- 测试

每一次手动打包很麻烦，而且即便有 `--watch` 也不方便，还需要自己手动刷新浏览器。

所以 webpack 给你提供了一个工具：`webpack-dev-server`

它就可以实现监视代码改变，自动打包，打包完毕自动刷新浏览器的功能。

安装：

```shell
npm i -D webpack-dev-server
```

配置：

```javascript
devServer: {
  // 配置 webpack-dev-server 的 www 目录
  contentBase: './dist'
},
```

配置 npm scritps:

```json
"scripts": {
  "build": "webpack",
  "watch-build": "webpack --watch",
  "dev": "webpack-dev-server --open"
},
```

启动开发模式：

```shell
npm run dev
```

解释：该工具会自动帮你打包，打包完毕只有会自动开启一个服务器，默认监听 8080 端口号，同时自动打开浏览器让你访问，接下来就会自动监视代码的改变，然后自动编译，编译完毕，自动刷新浏览器。

## 配置代理跨域

> https://webpack.js.org/configuration/dev-server/

## 配置热更新

> https://webpack.js.org/guides/hot-module-replacement

```javascript
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
+++ const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.join(__dirname, './dist/'), // 这里必须是绝对路径
    filename: 'bundle.js'
  },
  plugins: [
    // 该插件的所用就是把 index.html 打包到你的 bundle.js 文件所属目录
    // 也就是说 bundle 到哪里，index.html 就到哪里
    // 同时这个也会自动在 index.html 中出入 script 引用连接
    // 而且引用的资源名称，也取决于你的 bundle 叫什么
    // 这个插件还可以配置压缩 html 的处理
    new htmlWebpackPlugin({
      template: './index.html'
    }),
    +++ new webpack.NamedModulesPlugin(),
    +++ new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // 配置 webpack-dev-server 的 www 目录
    // 浏览器真正运行查看的是打包之后的结果
    // webpack-dev-server 为了提高打包效率，它把文件存储在了内存中，你看不见
    // 这里你只是在告诉 webpack-dev-server 让你的打包结果运行在虚拟目录 dist 中
    // 那这个时候你的打包结果中的 index.html 去加载资源时候确实需要相对于 dist 来找
    // ./ 的话，webpack-dev-server 就会直接把资源打包到项目根目录下
    // 但是注意：你也看不见它
    // 那这个时候你在 index.html 文件中请求的资源就是相对于 demo7 根目录
    contentBase: './',
    +++ hot: true
  },
  externals: {
    // key 就是包名
    // value 是全局的 jQuery 导出的接口
    vue: 'Vue'
  },
  module: {
    rules: [{
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.(jpg|png|gif|svg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /.less$/,
        use: [
          'style-loader', // 3. 根据模块生成 style 节点插入 head 中
          'css-loader', // 2. 在把 css 转成 JavaScript 模块
          'less-loader' // 1. 先把 less 转成 css，less-loader 依赖 less，所以 less 也要安装进来
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /.vue$/,
        use: [
          'vue-loader'
        ]
      }
    ]
  }
}

```

## 配置 ESLint 代码规范校验

> https://webpack.js.org/loaders/eslint-loader


## 区分打包环境

> https://webpack.js.org/guides/production
