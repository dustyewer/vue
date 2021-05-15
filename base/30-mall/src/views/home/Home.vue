<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :swiperList="banners"></HomeSwiper>
    <!--props 父组件和子组件的名字也可以一样-->
    <Recommend :recommends="recommends"></Recommend>
    <FeatureView></FeatureView>
    <TabControl class="tab-control" :titles="['流行','新款','精选']"></TabControl>
    <ul>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>

    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './homecnp/HomeSwiper'
  import Recommend from './homecnp/Recommend'
  import FeatureView from './homecnp/FeatureView'
  import TabControl from 'components/content/tabControl/TabControl'

  import {getHomeMultidata} from 'network/home'

export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'chose':{page:0,list:[]}
      }
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      console.log(res.data.banners)
    })
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
