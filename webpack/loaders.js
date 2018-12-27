const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  JSLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  },
  ESLintLoader: {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
      loader: 'eslint-loader',
      options: {
        configFile: __dirname + '/.eslintrc'
      }
    }
  },
  CSSLoader: {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ]
  },
  PUGLoader: {
    test: /\.pug$/,
    use: [
      'html-loader?attrs=false',
      {
        loader: 'pug-html-loader',
        options: {
          pretty: true
        }
      }
    ]
  }
}