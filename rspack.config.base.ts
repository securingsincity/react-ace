module.exports = {
  mode: "development",
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
  plugins: [],
  output: {
    library: {
      name: "ReactAce",
      type: "umd"
    },
    filename: "react-ace.js"
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"]
  }
};
