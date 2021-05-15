<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"
         :key="item.index" :class="{active: index=== currIndex }"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-control",
    props:{
      titles:{
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {
        currIndex: 0
      }
    },
    methods:{
      itemClick (index) {
        this.currIndex = index

      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;

  }

  .tab-control-item {
    flex: 1;
    heigh: 40px;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);

  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>
