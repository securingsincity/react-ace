module.exports = {
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
  output: {
    library: 'ReactAce',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx'],
  },
};
