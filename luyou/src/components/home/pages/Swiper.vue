<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperList:[
        {
          id:"01",
          imgUrl:require("@/assets/img/swiper_1.jpg")
        },
        {
          id:"02",
          imgUrl:require("@/assets/img/swiper_2.jpg")
        },
        {
          id:"03",
          imgUrl:require("@/assets/img/swiper_3.jpg")
        },
        {
          id:"04",
          imgUrl:require("@/assets/img/swiper_4.jpg")
        }
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop:true
      }
    }
  }
}

</script>
<style scoped >
  .header-swiper {
    /*rem（font size of the root element）是指相对于根元素的字体大小的单位*/
    /*width: 100%;*/
    /*height: 2rem;*/
    /*2rem就是100像素*/
    background: #ccc;
    height: 0;
    padding-bottom: 26.67%;
    /*预先设置一块灰色地带,用于图片较大,没有从网络上下载下来的时候做填充*/
    /*可以使得界面的布局不会发送变化, 掉块问题*/
    /*由于宽带是100%,iPhone6(375px) 设置一个26.67% 会根据宽度计算高度,算出来时100*/

  }

  .header-swiper img{
    width: 100%;
    height: 2rem;
  }

  /*样式穿透*/
  .header-swiper >>> .swiper-pagination-bullet-active{
    background: #fff;
  }

</style>
