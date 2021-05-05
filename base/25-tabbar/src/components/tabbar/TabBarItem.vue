<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isAct">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot  name="item-icon-act"></slot>
    </div>
    <!--<slot v-if="!isAct" name="item-icon"></slot>-->
    <!--<slot v-else name="item-icon-act"></slot>-->
    <div :style="actStyle" :class="{act: isAct}">
      <slot  name="item-text"></slot>
    </div>

    <!--<img src="../../assets/img/tabbar/home.png" alt="">-->
    <!--<div>first</div>-->
  </div>
</template>

<script>
export default {
  name: 'tab-bar-item',
  props: {
    path: String,
    actColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick () {
      console.log('item click')
      this.$router.push(this.path)
    }
  },
  computed: {
    isAct () {
      // 根据当前活跃路由的路径和每个路由的路径进行比较来确定哪个是活跃的
      return this.$route.path.indexOf(this.path) !== -1
    },
    actStyle () {
      return this.isAct ? {color: this.actColor} : {}
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex:1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  .act {
    color: red;
  }
</style>
