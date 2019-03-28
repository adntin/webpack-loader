const babel = require("@babel/core");
const loaderUtils = require("loader-utils");

// ES6 --> ES5
// this 是 loader 的上下文
function loader(source) {
  // console.log(Object.keys(this));
  // console.log(this.resourcePath); // /Users/devin.lin/Desktop/webpack-loader/src/index.js
  const done = this.async(); // 同步时, 默认会调用this.async()方法
  const options = loaderUtils.getOptions(this); // { presets: [ '@babel/preset-env' ] }
  babel.transform(
    source,
    {
      ...options,
      sourceMap: true, // 还需要在 webpack.config.js 中配置 devtool
      filename: this.resourcePath.split("/").pop()
    },
    (error, result) => {
      // 参数说明, 1: 错误信息, 2: 代码, 3: source map
      done(error, result.code, result.map); // 异步
    }
  );
}

module.exports = loader;
