const path = require('path');
const RussianBlabPlugin = require('../src');

module.exports = {
  mode: 'development',
  entry: __dirname + '/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new RussianBlabPlugin()
  ]
};