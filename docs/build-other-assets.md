# 第4章 打包其它资源模块

webpack 不仅可以打包 JavaScript 模块，甚至它把网页开发中的一切资源都可以当作模块来打包处理。

按时它本身不知此，它只是一个打包平台，其它资源，例如 css、less、sass、img 等资源需要结合插件来实现，这些插件在 webpack 中被称之为 loader ，翻译过来就是 加载器 的意思。

### 打包 CSS 样式文件

> - https://webpack.js.org/loaders/css-loader
> - https://webpack.js.org/loaders/style-loader

安装依赖：

```shell
# CSS-loader 的作用是吧 CSS 文件转为 JavaScript 模块
# style-loader 的作用是动态创建 style 节点插入到 head 中
npm install --save-dev style-loader css-loader
```

配置：

```json
var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist/'), // 这里必须是绝对路径
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          // 注意：这里的顺序很重要，不要乱了顺序，从咱们的角度，老外的思维是反的
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

```

打包：

```shell
npm run build
```

解释：打包 css 也是把 CSS 文件内容转换成了一个 JavaScript 模块，然后在运行 JavaScript 的时候，会动态的创建一个 style 节点插入到 head 头部。

### 打包 HTML 文件

> https://webpack.js.org/plugins/html-webpack-plugin

你会发现，当你打包结束的时候，如果 index.html 在根目录直接运行的话，那么图片资源这些路径就无法访问到了。解决方案就是把 index.html 放到 dist 目录中。

但是 dist  是打包编译的结果，而非源码，所以把 index.html 放到 dist 就不合适。

而且你也会发现，我们打包的结果文件名：`bundle.js` ，如果一旦我把这个文件名给改了，则 index.html 也要手动修改。

综合以上我们遇到的问题，我们就可以使用一个插件：`html-webpack-plugin` 来解决。



安装依赖：

```shell
npm i -D html-webpack-plugin
```

配置：

```javascript
plugins: [
  // 该插件的所用就是把 index.html 打包到你的 bundle.js 文件所属目录
  // 也就是说 bundle 到哪里，index.html 就到哪里
  // 同时这个也会自动在 index.html 中出入 script 引用连接
  // 而且引用的资源名称，也取决于你的 bundle 叫什么
  // 这个插件还可以配置压缩 html 的处理
  new htmlWebpackPlugin({
    template: './index.html'
  })
],
```


### 清理 dist 目录

> https://github.com/johnagan/clean-webpack-plugin

### 打包图片文件

#### file-loader

> https://webpack.js.org/loaders/file-loader

#### image-webpack-loader

> https://github.com/tcoopman/image-webpack-loader

#### url-loader

> https://webpack.js.org/loaders/url-loader/

安装依赖：

```shell
npm install --save-dev file-loader
```

配置：

```javascript
module: {
  rules: [
    {
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
    }
  ]
}
```

### 打包字体文件

- file-loader

### 打包 Less 样式文件

> https://webpack.js.org/loaders/less-loader

安装依赖：

```shell
# 如果 css-loader 安装过了就不需要安装了
npm i -D css-loader style-loader less less-loader
```

配置：

```javascript
module: {
  rules: [
    {
      test: /.less$/,
      use: [
        'style-loader', // 3. 根据模块生成 style 节点插入 head 中
        'css-loader', // 2. 在把 css 转成 JavaScript 模块
        'less-loader' // 1. 先把 less 转成 css
      ]
    }
  ]
}
```



### 打包 Sass 样式文件

- https://webpack.js.org/loaders/sass-loader

### 打包 ES6 转换 ES5

> https://webpack.js.org/loaders/babel-loader

- babel
  - http://babeljs.io/
  - babel 是一个 JavaScript 编译器，可以把 EcmaScript 6 编译成 EcmaScript 5
  - babel 可以独立使用，但是独立使用没有意义，一般是和 webpack 结合到一起来使用的
- cacheDirectory
- babel-polyfill
  - 默认 babel 只转换语法
  - 我们可以使用 babel-polyfill 来转换 EcmaScript 6 中的 API
- babel runtime

安装依赖：

```shell
npm install --save-dev babel-loader babel-core babel-preset-env
```

配置：

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/, // 不转换 node_modules 中的文件模块
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }
  ]
}
```

> babel 只转换 ECMAScript 6 语法
>
> let、const、箭头函数、解构赋值
>
> 不会转换 API，例如数组的 find、findIndex、字符串的 startsWith、endsWith

#### 配置 babel-polyfill 来提供低版本浏览器中的不支持 API

- entry 入口加载 babel-polyfill
- .babelrc
  - useBuiltIns: 'usage'
- 入口文件 import babel-polyfill

安装：

```shell
npm i -D babel-polyfill
```

配置：

```javascript
entry: ['babel-polyfill', './src/main.js'],
```

这样话就会在打包的结果中提供一个垫脚片用以兼容低版本浏览器中的不支持的 API。



#### 配置 transform-runtime 来解决代码重复问题

在打包过程中，babel 会在某个包提供一些工具函数，而这些工具函数可能会重复的出现在多个模块。这样的话就会导报打包体积过大，所以 babel 提供了一个 babel-transform-runtime 来解决这个打包体积过大的问题。



安装：

```shell
npm install babel-plugin-transform-runtime --save-dev
npm install babel-runtime --save
```

配置：

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-runtime']
        }
      }
    }
  ]
}
```

#### 加入缓存节省编译时间

babel 编译是非常耗时的，我们可以通过开启对编译结果的缓存来提高打包速度：

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          // 默认把打包的结果缓存到 node_modules/.cache 模板
          cacheDirectory: true,
          presets: ['env'],
          plugins: ['transform-runtime']
        }
      }
    },
  ]
}
```
