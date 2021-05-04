// 没有这个文件，就要写 webpack ./src/main.js ./dist/bundle.js
// 有了可以直接写webpack

// path是node中的一个包
const path = require('path')
//webpack自带的插件,可以在生成的js里面加一个banner
const webpack = require('webpack')
//想把index.html在打包时放到dist目录里,又要引入一个插件
//命令:npm install html-webpack-plugin@3.2.0 --save-dev
const HtmlWebpackPlugin = require('html-webpack-plugin')
//压缩js的插件
// 命令:npm install uglifyjs-webpack-plugin@1.1.1
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

//想不要每次都npm run builder又的装一个本地服务器
// 命令:npm install webpack-dev-server@2.9.3 --save-dev
module.exports = {
  entry: './src/main.js',
  output: {
    // 需要绝对路径
    // path :'./dist',
    // __dirname node中定义的，表示当前这个文件的路径 resolve 是拼接的意思
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //引入html-webpack-pulgin后,自动把index.html移动到dist,下面的语句就不能要了
    // publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 使用多个loader时，从右向左
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
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
              // 当加载的图片小于limit时,会把图片编译成base64格式
              // 当加载的图片大于limit时,又需要file-loader
              limit:8192,
              // 设置打包后的文件名[原来的文件名].[hash值截取8位].[原来的扩展名]
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
    }),
    //发表时需要,调试时不建议
    new UglifyjsWebpackPlugin()
  ],
  //为方便调试,使用本地服务器
  devServer:{
    contentBase:'./dist',
    inline:true
  }
}