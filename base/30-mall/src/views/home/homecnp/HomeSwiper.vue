<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <a href="item.link">
        <img :src="item.image" alt="">
        </a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "home-swiper",
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true
        },

      }
    },
    props:['swiperList']
  }
</script>

<style scoped>

  .header-swiper img {
    width: 100%;
  }

</style>
