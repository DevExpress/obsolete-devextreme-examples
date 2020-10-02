const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: "./index.ts",
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
      'vue$': 'vue/dist/vue.cjs.js'
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
          test: /\.tsx?$/, 
          use: {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/]
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
    new VueLoaderPlugin()
  ]
};
