// 有了build目录下面的几个config.js后,webpack.config.js可以删除了
// 还得修改package.json里面的
// "build": "webpack "
// "dev":"webpack-dev-server --open"
// 要加上配置文件的路径
// "build": "webpack --config ./build/prod.config.js",
// "dev":"webpack-dev-server --open --config ./build/dev.config.js"

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
        path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test:/\.less$/,
        use:[
          {loader:"style-loader"},
          {loader:"css-loader"},
          {loader:"less-loader"}
        ]
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          {
            loader:"url-loader",
            options:{
              limit:8192,
              name: 'img/[name].[hash:8].[ext]'
            },


          }
        ]
      },
      {
        test:/\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            // presets:['@babel/preset-env']
            presets:['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve:{
    // 想在import后面省略扩展名
    extensions:['.js','.vue'],
    alias:{
      // 指定使用vue的runtime-compiler版本
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    //插件的小例子
    new webpack.BannerPlugin("最终版权归yewer"),
    new HtmlWebpackPlugin({
      template:'index.html'
    })
  ]

}