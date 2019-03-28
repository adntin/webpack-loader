### 自己实现 babel-loader

babel-utils 库可以拿到 webpack.config.js options 参数

```
module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader", // 自己实现
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
```

查看 source map 需要使用 http-server 开启服务, 直接浏览文件看不到 source map
