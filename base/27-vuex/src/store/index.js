import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types'

Vue.use(Vuex)

const moduleB = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}

const store = new Vuex.Store({
  state: {
    counter: 0,
    nums: [5, 9, 7, 1],
    info: {
      name: 'yewer',
      age: 30
    }
  },
  // 同步修改
  mutations: {
    [INCREMENT] (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    incrementCount (state, count) {
      state.counter += count
    },
    incrementCount2 (state, payload) {
      // 写法2 对应的处理
      state.counter += payload.num
    },
    changeInfo (state) {
      // 修改原来的属性是响应式的
      // 修改原来的属性的同时新增属性也是响应式的
      // 单独新增属性不是响应式的
      state.info.name = 'uu'
      // state.info['add'] = 'sy'
      // 使用Vue set是响应式的
      // Vue.set(state.info, 'add', 'sy')
      // delete 方法不是响应式的
      // delete state.info.age
      // Vue.delete(state.info, 'age')
    }
  },
  // 异步修改
  actions: {
    aChangeInfo (context, payload) {
      setTimeout(() => {
        context.commit('changeInfo')
        console.log(payload.msg)
        payload.success()
      }, 2000)
    },
    // 更优雅的写法,返回promise ,外部调用then
    aChangeInfo2 (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('changeInfo')
          console.log(payload)
          resolve('11111')
        }, 1000)
      })
    }

  },
  // 对于要处理的数据用 getters
  getters: {
    powerCounter (state) {
      return state.counter * state.counter
    },
    more1num (state) {
      return state.nums.filter(n => n > 1)
    },
    // 第二个参数不管名字叫什么,实际上总是getters,可以用于调用其他getters的方法
    more1numLength (state, getters) {
      return getters.more1num.length
    },
    // 对于有参数的情况,要返回一个函数
    moreNum (state) {
      // return function (num) {
      //   return state.nums.filter(n => n > num)
      // }
      // 以下是用箭头函数简写
      return num => state.nums.filter(n => n > num)
    }
  },
  modules: {
    a: {
      state: {
        name: 'yyyy'
      },
      mutations: {},
      actions: {},
      getters: {
        fullName (state) {
          return state.name + '111111'
        },
        fullName2 (state, getters) {
          return getters.fullName + '222'
        },
        fullName3 (state, getters, rootState) {
          return getters.fullName2 + rootState.counter
        }
      }
    },
    b: {
      moduleB
    }

  }

})

export default store
