const loaderUtils = require("loader-utils");
const mime = require("mime");

function loader(source) {
  // console.log(source); // Buffer 二进制
  // console.log(this.resourcePath); // /Users/devin.lin/Desktop/webpack-loader/src/avatar.jpg
  const { limit } = loaderUtils.getOptions(this); // { limit: 200 * 1024 }
  if (limit && limit > source.length) {
    // http://imgbase64.duoshitong.com/
    // 在线查看图片转换base64格式
    // 文件类型
    const t = mime.getType(this.resourcePath); // image/png
    return `module.exports = 'data:${t};base64,${source.toString("base64")}'`; // base64
  } else {
    return require("./file-loader").call(this, source); // 使用自己实现的file-loader生成文件
  }
}

loader.raw = true; // 二进制

module.exports = loader;
