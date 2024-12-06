const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./example/index",
    split: "./example/split",
    diff: "./example/diff"
  },
  output: {
    path: path.join(__dirname, "example/static"),
    filename: "[name].js",
    publicPath: "/static/"
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"]
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true
              }
            }
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true
              }
            }
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    static: [path.join(__dirname, "example"), path.join(__dirname, "dist")],
    compress: true,
    port: 9000
  }
};
