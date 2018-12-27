const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  HtmlWebpackPlugin: new _HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/views/index.pug'
  }),
  MiniCssExtractPlugin: new _MiniCssExtractPlugin()
};