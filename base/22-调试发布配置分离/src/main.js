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

document.writeln('<h2>xxddddx</h2>')


// 使用vue开发
import Vue from 'vue'

// 不在调试的时候用app.来访问,const  app可以不需要
// const app=new Vue({

// //中间形态的写法
// new Vue({
//   el:"#app",
//   // 同时有template和el,vue会用template的内容替换el的内容
//   template:`
//   <div>
//   <h2>{{msg}}</h2>
//   </div>`,
//   data:{
//     msg:"hello"
//   }
// })



// 进化之后的写法
// const App ={
//   template:`
//   <div>
//    <h2>{{msg}}</h2>
//   </div>
//   `,
//   data() {
//     return {
//       msg:'hello'
//     }
//   }
//
// }
// new Vue({
//   el:"#app",
//   template:'<App/>',
//   components:{
//     App
//   }
// })

//再次进化,把app拿走发到一个vue文件里面
// import App from './vue/app'

//再次进行,从app.js进化到App.vue
// 又得安装loader了,要不然处理不了.vue文件
// vue-loader 装了太高版本后,可能时14.X之后又需要安装特殊插件,所以要安装一个低一点的版本, 比如13.x.x
// vue-loader 命令:npm install --save-dev vue-loader@13.0.0
// vue-template-compiler 命令:npm install --save-dev vue-template-compiler@2.5.21
//

import App from './vue/App.vue'

new Vue({
  el: "#app",
  template: '<App/>',
  components: {
    App
  }
})