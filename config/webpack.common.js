var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var failPlugin = require('webpack-fail-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/app/polyfills.ts',
    'vendor': './src/app/vendor.ts',
    'app': './src/app/main.ts'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.html']
  },

  module: {

    loaders:  [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|jpe?g|gif|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.css$/, exclude: helpers.root('src', 'app'), loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
      { test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw' },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    failPlugin
  ]
};
