<template>
  <tab-bar>
    <tab-bar-item path="/home" actColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-act" src="~assets/img/tabbar/home2.png" alt="">
      <div slot="item-text">home</div>
    </tab-bar-item>
    <tab-bar-item path="/category" actColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="">
      <img slot="item-icon-act" src="~assets/img/tabbar/category2.png" alt="">
      <div slot="item-text">category</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-act" src="~assets/img/tabbar/cart2.png" alt="">
      <div slot="item-text">cart</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-act" src="~assets/img/tabbar/profile2.png" alt="">
      <div slot="item-text">profile</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'main-tab-bar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
