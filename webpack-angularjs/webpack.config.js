var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
	},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
