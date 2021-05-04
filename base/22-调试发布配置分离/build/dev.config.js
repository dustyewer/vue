
//多个config.js,要合并,还得装东西
//命令:npm install webpack-merge@4.1.5 --save-dev

const webpackMerge=require('webpack-merge')
const baseConfig= require('./base.config')

module.exports=webpackMerge(baseConfig,{
  devServer: {
    contentBase: './dist',
    inline: true
  }
})