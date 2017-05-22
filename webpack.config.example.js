const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: 'source-map',
  entry: {
    'index': './example/index',
    'split': './example/split',
  },
  output: {
    path: path.join(__dirname, 'example/static'),
    filename: '[name].js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
  devServer: {
    hot: true,
    contentBase:  [path.join(__dirname, 'example'), path.join(__dirname, 'dist')],
    compress: true,
    port: 9000,
  },
};
