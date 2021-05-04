<template>
  <div id="app">
    <!--router-link实际是a标签-->
    <!--router-link默认是pushState,加上replace属性就换成replaceState,就不能前进后退-->
    <router-link to="/home" replace>home</router-link>
    <!--tag标签可以把router-link重新渲染成其他样式-->
    <router-link to="/about" tag="button">about</router-link>
    <button @click="btnClick">使用函数</button>
    <router-link v-bind:to="'/user/'+userId">user</router-link>
    <router-link :to="{path:'/profile',query:{name:'yewer'}}">profile</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userId: 'yewer'
    }
  },
  methods: {
    btnClick () {
      // push 就是pushState
      // 也可以用replace
      // this.$router.push('/test')
      // // 带参数
      // this.$router.push({
      //   path: '/profile',
      //   query: {
      //     name: 'yewer'
      //   }
      // })
      // 带参数,要用name的话,路由表const routes = []的对象里面得有name
      this.$router.push({
        name: 'profile',
        params: {
          name: 'yewer'
        }
      })
    }
  }
}
</script>

<style>
  .router-link-active {
    color: red
  }

</style>
