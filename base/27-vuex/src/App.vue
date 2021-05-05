<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="add2(5)">+5</button>
    <button @click="add3(10)">+10</button>
    <button @click="sub">-</button>
    <h3>{{$store.state.info}}</h3>
    <button @click="changeInfo">change</button>
    <button @click="aChangeInfo">aChange</button>
    <!--父组件传数据给子组件-->
    <!--<hello-vuex :counter="counter"></hello-vuex>-->

    <h4>{{$store.getters.powerCounter}}</h4>
    <h4>{{$store.getters.more1num}}</h4>
    <h4>{{$store.getters.more1numLength}}</h4>
    <h4>{{$store.getters.moreNum(5)}}</h4>
    <hello-vuex></hello-vuex>
    <h2>模块内部的用法 和普通的用法差不多</h2>
    <h4>{{$store.state.a.name}}</h4>
    <h4>{{$store.getters.fullName}}</h4>
    <h4>{{$store.getters.fullName2}}</h4>
    <h4>{{$store.getters.fullName3}}</h4>
    <router-view/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {
  INCREMENT
} from './store/mutations-types'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    add () {
      // this.counter++
      this.$store.commit(INCREMENT)
    },
    sub () {
      // this.counter--
      this.$store.commit('decrement')
    },
    add2 (num) {
      // 写法1
      this.$store.commit('incrementCount', num)
    },
    add3 (num) {
      // 写法2 第二个参数就变成对象了
      this.$store.commit({
        type: 'incrementCount2',
        num
      })
    },
    changeInfo () {
      this.$store.commit('changeInfo')
    },
    aChangeInfo () {
      // this.$store.dispatch('aChangeInfo', {
      //   msg: '这是携带的信息',
      //   success: () => {
      //     console.log('里面已经完成')
      //   }
      // })

      this.$store.dispatch('aChangeInfo2', '这是携带的信息')
        .then(res => {
          console.log('里面完成了')
          console.log(res)
        })
    }

  }
}
</script>

<style>
</style>
