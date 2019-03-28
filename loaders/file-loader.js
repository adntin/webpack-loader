const loaderUtils = require("loader-utils");

function loader(source) {
  // console.log(source); // Buffer 二进制
  // 生成文件名称, 根据图片内容生成md5的hash值
  const filename = loaderUtils.interpolateName(this, "[hash].[ext]", {
    content: source
  });
  this.emitFile(filename, source); // 发射文件到dist目录
  return `module.exports = "${filename}"`; // file-loader 需要返回一个路径
}

loader.raw = true; // 二进制

module.exports = loader;
