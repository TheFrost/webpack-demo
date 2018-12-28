const path = require('path');
const glob = require('glob-all');

const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _PurifyCssPlugin = require('purifycss-webpack');

module.exports = {
  HtmlWebpackPlugin: [
    'index', 
    'contacto'
  ].map(page => (
    new _HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `./src/views/${page}.pug`
    })
  )),
  MiniCssExtractPlugin: new _MiniCssExtractPlugin(),
  PurifyCssPlugin: new _PurifyCssPlugin({
    paths: glob.sync([
      path.join(__dirname, 'src/views/*.html'),
      path.join(__dirname, 'src/js/*.js')
    ]),
    minimize: true
  })
};