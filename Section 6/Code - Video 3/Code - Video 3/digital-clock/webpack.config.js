const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = [
  {
    entry: './main.js',
    target: 'electron-main',
    node: {
      __dirname: false,
      __filename: false
    },
    output: {
      filename: 'main.min.js',
      path: __dirname
    },
    plugins: [
      new BabiliPlugin()
    ]
  },
  {
    entry: './app.js',
    target: 'electron-renderer',
    output: {
      filename: 'app.min.js',
      path: __dirname
    },
    plugins: [
      new BabiliPlugin()
    ]
  }
];
