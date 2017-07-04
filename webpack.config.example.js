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
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.ts(x?)$/,
      use: ['babel-loader', 'ts-loader'],
      exclude: /node_modules/
    },],
  },
  devServer: {
    hot: true,
    contentBase:  [path.join(__dirname, 'example'), path.join(__dirname, 'dist')],
    compress: true,
    port: 9000,
  },
};
