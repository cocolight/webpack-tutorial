# 第3章 打包 JavaScript 模块

> https://webpack.js.org/concepts/modules

### JavaScript 模块化

- AMD
  - Require.js
- CMD
  - Sea.js
- CommonJS 模块规范
- 以上都是民间搞出来的，所以在 2015 年的 EcmaScript 6 中官方就发布了官方的 模块规范：EcmaScript 6 Module 模块规范
  - 我们更推荐在项目中使用 EcmaScript 6 模块规范
  - 以后的统一趋势
- webpack
  - AMD
  - CMD
  - CommonJS
  - EcmaScript 6 Module



### EcmaScript 6 模块规范

导入 import（require）

导出 export（module.exports）

导出默认成员：

```javascript
// 默认成员只能有一个，否则报错
exports default 成员
```

加载默认成员：

```javascript
// 如果没有 default 成员，则加载到的就是 undefined
import xxx from '模块标识'
```

导出多个成员：

```javascript
// export 必须引用到内部的一个成员
export const a = 123
export const b = 456
export function fn () {
  console.log('fn')
}
```

如果你觉得上面的方式比较麻烦，也可以以这样的方式来导出多个成员：

```javascript
const a = 123
const b = 456
function fn () {
  console.log('fn')
}

// 注意：这里不是对象的简写方式，这是导出的特殊语法
// 这种方式也不是覆盖，后面还可以继续导出
export {
  a,
  b,
  fn
}

// 可以继续增加导出的成员
export function add (x, y) {
  return x + y
}

// 最终导出的实际上是 a、b、fn、add
```



按需加载指定的多个成员：

```javascript
import {a, b} from '模块标识'
```

一次性加载所有的导出成员：

```javascript
// 所有成员包含 default
import * as xxx from '模块标识'
```
