const { stringifyRequest } = require("loader-utils");

function loader(source) {
  console.log("~~~~~~~~"); // 注意: 有 loader.pitch, 些函数不执行
  const str = `
    const style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.body.appendChild(style);
  `;
  return str;
}

// 让 style-loader 去处理 css-loader!less-loader!./index.less
loader.pitch = function(remainingRequest) {
  // /Users/devin.lin/Desktop/webpack-loader/loaders/css-loader.js!/Users/devin.lin/Desktop/webpack-loader/loaders/less-loader.js!/Users/devin.lin/Desktop/webpack-loader/src/index.less
  console.log(remainingRequest); // 绝对路径
  // 绝对路径 --> 相对路径
  const relativePath = stringifyRequest(this, "!!" + remainingRequest); // !!表求只执行自己, 如果没有!!, 发现是index.less, 又会去执行style-loader, 会死循环
  // !!../loaders/css-loader.js!../loaders/less-loader.js!./index.less
  console.log(relativePath); // 相对路径
  // require(relativePath)
  // require('!!../loaders/css-loader.js!../loaders/less-loader.js!./index.less')
  // require 变成行内 loader, 加载的就是 css-loader 处理好的结果
  const str = `
    const style = document.createElement('style');
    style.innerHTML = require(${relativePath});
    document.body.appendChild(style);
  `;
  return str;
};

module.exports = loader;
