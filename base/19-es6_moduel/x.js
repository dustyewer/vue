import {flag,sum} from "./a.js";

import {num} from "./a.js"

import {mul} from "./a.js"

import {Person} from "./a.js"

// default导出的内容可以自己取名
import xxx from "./a.js"
// 按一个对象全部导入
import * as a from "./a.js"

if(flag) {
  console.log("xxi");
  console.log(sum(1, 2));
  console.log(num);
  console.log(mul(3, 4));


  let person = new Person()
  person.run()

  console.log(xxx);
  console.log(a.mul(5, 6));
}