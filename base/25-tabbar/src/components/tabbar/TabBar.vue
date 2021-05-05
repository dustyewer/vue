<template>
  <div id="tab-bar">
    <slot></slot>
    <!--<div class="tab-bar-item">-->
      <!--<img src="../../assets/img/tabbar/home.png" alt="">-->
      <!--<div>first</div></div>-->
    <!--<div class="tab-bar-item">-->
      <!--<img src="../../assets/img/tabbar/home.png" alt="">-->
      <!--second</div>-->
    <!--<div class="tab-bar-item">-->
      <!--<img src="../../assets/img/tabbar/home.png" alt="">-->
      <!--three</div>-->
    <!--<div class="tab-bar-item">-->
      <!--<img src="../../assets/img/tabbar/home.png" alt="">-->
      <!--four</div>-->
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  @import "../../assets/css/base.css";

  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*阴影效果*/
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }

  /*.tab-bar-item {*/
    /*flex:1;*/
    /*text-align: center;*/
    /*height: 49px;*/
  /*}*/

  /*.tab-bar-item img {*/
    /*width: 24px;*/
    /*height: 24px;*/
  /*}*/
</style>
