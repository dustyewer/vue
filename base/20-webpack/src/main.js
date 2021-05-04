// commjs的写法
const {add} = require('./js/math.js')

// es6的写法
import {name} from "./js/info"

console.log(add(1, 2));
console.log(name);


// 依赖css文件
// 要安装css-loader style-loader
// npm install --save-dev css-loader0.28.7
// npm install --save-dev style-loader0.23.1
require('./css/normal.css')


// 依赖less文件
// 要安装less，less-loader
// npm install --save-dev less@3.9.0
// npm install --save-dev less-loader@4.1.0
require('./css/special.less')

//引入了个图片背景,又要引入url-loader@1.1.2
// 图片太大了又要引入file-loader@2.0.0

document.writeln('<h2>hello</h2>')


// 使用vue开发
import Vue from 'vue'

const app=new Vue({
  el:"#app",
  data:{
    msg:"hello"
  }
})