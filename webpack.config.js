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
  // module: {
  //   rules: [
  //     // 从右到左
  //     {
  //       test: /\.js$/,
  //       use: ["loader3", "loader2", "loader1"]
  //     }
  //   ]
  // }
  module: {
    rules: [
      // 强制设置顺序
      {
        test: /\.js$/,
        use: "loader1",
        enforce: "pre"
      },
      {
        test: /\.js$/,
        use: "loader2"
      },
      {
        test: /\.js$/,
        use: "loader3",
        enforce: "post"
      }
    ]
  }
};
