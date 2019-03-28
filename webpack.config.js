const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  resolveLoader: {
    // 先在 node_modules 里面找, 找不到再去 loaders 目录下找
    modules: ["node_modules", path.resolve(__dirname, "loaders")]
  },
  // README.md
  // module: {
  //   rules: [
  //     // 从右到左
  //     {
  //       test: /\.js$/,
  //       use: ["loader3", "loader2", "loader1"]
  //     }
  //   ]
  // }
  // README.md
  // module: {
  //   rules: [
  //     // 强制设置顺序
  //     {
  //       test: /\.js$/,
  //       use: "loader1",
  //       enforce: "pre"
  //     },
  //     {
  //       test: /\.js$/,
  //       use: "loader2"
  //     },
  //     {
  //       test: /\.js$/,
  //       use: "loader3",
  //       enforce: "post"
  //     }
  //   ]
  // }
  // README2.md ----------------------- 自己实现, babel-loader
  // devtool: "source-map",
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: {
  //         loader: "babel-loader", // 自己实现, ES6 --> ES5
  //         options: {
  //           presets: ["@babel/preset-env"]
  //         }
  //       }
  //     }
  //   ]
  // }
  // README3.md ----------------------- 自己实现, banner-loader
  // watch: true,
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: {
  //         loader: "banner-loader", // 自己实现, 头部添加注释
  //         options: {
  //           text: "devin",
  //           filename: path.resolve(__dirname, "banner.js")
  //         }
  //       }
  //     }
  //   ]
  // }
  // README4.md ----------------------- 自己实现, file-loader + url-loader
  // module: {
  //   rules: [
  //     {
  //       test: /\.jpg$/,
  //       use: "file-loader" // 自己实现, 生成md5文件名, 发射到dist目录, 并返回当前图片路径
  //     },
  //     {
  //       test: /\.js$/,
  //       use: {
  //         loader: "babel-loader", // 自己实现, ES6 --> ES5
  //         options: {
  //           presets: ["@babel/preset-env"]
  //         }
  //       }
  //     }
  //   ]
  // }
  // module: {
  //   rules: [
  //     // 自己实现, 生成md5文件名, 发射到dist目录, 并返回当前图片路径
  //     // 1) 大于limit时, 调用file-loader生成文件
  //     // 2) 小于limit时, 生成base64字符串
  //     {
  //       test: /\.png$/,
  //       use: {
  //         loader: "url-loader",
  //         options: {
  //           limit: 20 * 1024 // 大于200KB会生成文件, 否则生成base64字符串
  //         }
  //       }
  //     },
  //     {
  //       test: /\.js$/,
  //       use: {
  //         loader: "babel-loader", // 自己实现, ES6 --> ES5
  //         options: {
  //           presets: ["@babel/preset-env"]
  //         }
  //       }
  //     }
  //   ]
  // }
  // README5.md ----------------------- 自己实现, less-loader + css-loader + style-loader
  module: {
    // 自己实现
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader", // 插入到html中
          "css-loader", // css 解析, 比如 url, @import
          "less-loader" // less --> css
        ]
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 2 * 1024 // 大于200KB会生成文件, 否则生成base64字符串
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader", // 自己实现, ES6 --> ES5
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
