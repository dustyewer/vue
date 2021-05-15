<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.id"  class="recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "recommend",
    props:['recommends']
  }
</script>

<style scoped>
  .recommends {
    /*水平布局*/
    display:flex;
    text-align: center;
  }

  .recommend {
    /*均分*/
    flex:1;
  }

  /*.recommend {*/
    /*width: 25%;*/
    /*float: left;*/
  /*}*/

  .recommend img {
    width: 65px;
    height: 65px;
    margin-bottom: 5px;

  }

</style>
