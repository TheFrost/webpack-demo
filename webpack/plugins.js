const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  MiniCssExtractPlugin: new _MiniCssExtractPlugin()
};