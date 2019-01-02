const plugins = require('./plugins');

module.exports = () => ({
  plugins: [
    plugins.PurgecssPlugin,
  ]
});