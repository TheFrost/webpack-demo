const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  JSLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-syntax-dynamic-import']
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
      {
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './webpack/'
          }
        }
      },
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
  },
  FontsLoader: {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts',
        publicPath: '../fonts',
      }
    }]
  }
}