var name='x'
var age=18
var flag=true

function sum(x,y) {
  return x+y
}

if(flag){
  console.log(sum(1, 2))
}

export {sum ,flag}
export var num=100

export  function mul(x,y) {
  return x*y

}

export class Person{
  run(){
    console.log("run");
  }
}
// 只能有一个default
export default num