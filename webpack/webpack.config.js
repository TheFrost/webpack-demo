const path = require('path');
const webpackMerge = require('webpack-merge');

const loaders = require('./loaders');
const plugins = require('./plugins');
const modeConfig = env => require(`./webpack.${env}`)(env);

module.exports = ({ mode } = { mode: 'production' }) => {
  return webpackMerge(
    {
      mode,
      entry: './src/js/app.js',
      output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
      },
      module: {
        rules: [
          loaders.JSLoader,
          loaders.ESLintLoader,
          loaders.CSSLoader,
          loaders.PUGLoader,
          loaders.FontsLoader
        ]
      },
      plugins: [
        plugins.MiniCssExtractPlugin,
        ...plugins.HtmlWebpackPlugin
      ]
    },
    modeConfig(mode)
  );
};