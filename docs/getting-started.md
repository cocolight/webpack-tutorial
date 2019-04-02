# 第2章 起步

### hello world

创建示例目录并安装依赖

```bash
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```



- index.html
- src
  - index.js
  - foo.js



`foo.js` 文件内容如下：

```javascript
export default function () {
  console.log('我是 foo 文件模块啊')
}
```



`main.js` 文件内容如下：

```javascript
import foo from './foo'

foo()

```

打包：

```shell
npx webpack
```



index.html` 文件内容如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <!-- <script src="js/main.js"></script> -->
  <!-- 最后记得把 index.html 文件中的脚本应用改为打包之后的结果文件路径。 -->
  <script src="js/bundle.js"></script>
</body>
</html>
```

打开查看 index.html。



### 安装

我们安装的时候把 webpack 安装到开发依赖(--save-dev)中，因为 webpack 只是一个打包工具，项目如果需要上线，上线的是打包的结果，而不是这个工具。所以了我们为了区分核心包依赖和开发工具依赖，这里通过 `--save` 和 `--save-dev` 来区分。



本地安装（推荐）：

```shell
# 把工具（webpack、style-loader、less-loader...）相关的依赖项保存到开发依赖
# 把非工具（vue、axios、vue-router、moment...）正常安装
npm install --save-dev webpack
```

对于安装到项目中的 webpack 需要配置 npm scripts 来使用：

```json
{
  "name": "demo2",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.8.1"
  }
}

```

然后通过 `npm run` 命令来打包：

```shell
npm run a

# start 比较特殊，可以不加 run
npm start

# 打包构建
# 这里使用的 webpack 就是项目中安装的 webpack
npm run build
```

### 配置文件 `webpack.config.js`

最基本的配置项：

```javascript
// 该文件其实最终是要在 Node 环境下执行的
const path = require('path')

// 导出一个具有特殊属性配置的对象
module.exports = {
  entry: './src/main.js', // 入口文件模块路径
  output: {
    path: path.join(__dirname, './dist/'), // 出口文件模块所属目录，path 必须是一个绝对路径
    filename: 'bundle.js' // 打包的结果文件名称
  }
}
```

打包：

```shell
# webpack 会自动读取 webpack.config.js 文件作为默认的配置文件
# 也可以通过 --config 参数来手动指定配置文件
webpack
```

### npm scripts
