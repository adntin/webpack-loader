const loaderUtils = require("loader-utils");
const validateOptions = require("schema-utils");
const fs = require("fs");

const schema = {
  type: "object",
  properties: {
    text: {
      type: "string"
    },
    filename: {
      type: "string"
    }
  }
};

// 给每个文件头部添加注释
function loader(source) {
  this.cacheable && this.cacheable(true); // 使用缓存
  const done = this.async();
  const options = loaderUtils.getOptions(this);
  validateOptions(schema, options, "error message: banner-loader"); // 校验webpack.config.js中的 options 参数
  if (options.filename) {
    this.addDependency(options.filename); // 添加文件依赖, webpack.config.js 添加 watch 属性可以实时监听修改
    fs.readFile(options.filename, "utf8", (error, data) => {
      done(error, `/** ${data} **/${source}`);
    });
  } else {
    done(null, `/** ${options.text} **/${source}`);
  }
  return source;
}

module.exports = loader;
