const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: "./app.jsx",
  output: {
    filename: "./public/js/app/bundle.js",
  },
  devServer: {
    port: 9900,
    open: true,
    openPage: "public/index.html"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".vue", ".js", ".jsx"]
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ["transform-react-jsx"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      { 
        test: /\.(eot|svg|ttf|woff|woff2)$/, 
        use: "url-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};