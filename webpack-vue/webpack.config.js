const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: "./index.js",
  output: {
    filename: "./public/js/app/bundle.js",
  },
  devServer: {
    port: 9900,
    open: true,
    openPage: "public/index.html"
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".vue", ".js"],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  mode: "production",
  module: {
    rules: [
      {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
              esModule: true
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
    new VueLoaderPlugin()
  ]
};