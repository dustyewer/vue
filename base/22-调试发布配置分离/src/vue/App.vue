<template>
  <div>
    <h2 class="title">{{msg}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn'
  export default {
    name: "App",
    data() {
      return {
        msg:'hello'
      }
    },
    components:{
      Cpn
    }
  }
</script>

<style scoped>
  .title {
    color:green;
  }

</style>