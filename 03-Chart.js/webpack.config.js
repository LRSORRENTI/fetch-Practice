const path = require('path');

module.exports = {
  entry: '/src/index.js',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    liveReload: true, // Automatically refresh when changes occur
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};