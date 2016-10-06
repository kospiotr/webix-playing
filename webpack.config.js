var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    bootstrap: './src/bootstrap.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      {test: /\.(ttf|eot|svg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},

    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      {context: path.join(__dirname, 'src'), from: '**/*.html'}
    ], {}),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 4000,
      server: {baseDir: ['build']}
    })
  ]

};