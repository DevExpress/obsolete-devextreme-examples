var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'none',
	entry: './index.js',
	output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
	}
};
