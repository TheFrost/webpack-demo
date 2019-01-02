const path = require('path');
const glob = require('glob-all');

const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src')
};

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
  MiniCssExtractPlugin: new _MiniCssExtractPlugin({
    filename: 'css/[name].css'
  }),
  PurgecssPlugin: new _PurgecssPlugin({
    paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
  })
};