<template>
  <div>
    <h2>Home</h2>
    <router-link to="/home/news">news</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  destroyed () {
    console.log('home destoryed')
  },
  mounted () {
    console.log('home mounted')
  },
  created () {
    console.log('home created')
  },
  // activated deactivated在keep-alive了才能用
  activated () {
    console.log('home activated')
  },
  deactivated () {
    console.log('home deactivated')
  }
}
</script>

<style scoped>

</style>
