<template>
  <div class="icons">
    <div class="icons-item" v-for="item in icons">
      <img :src="item.imgUrl" alt="">
      <p>{{item.text}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "icons",
    data () {
      return {
        icons: [
          {
            id:1,
            imgUrl:require("@/assets/img/flight.png"),
            text:"机票"
          },
          {
            id:2,
            imgUrl:require("@/assets/img/hotel.png"),
            text:"酒店"
          },
          {
            id:3,
            imgUrl:require("@/assets/img/package.png"),
            text:"度假"
          },
          {
            id:4,
            imgUrl:require("@/assets/img/piao.png"),
            text:"门票"
          },
          {
            id:5,
            imgUrl:require("@/assets/img/train.png"),
            text:"火车票"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .icons-item{
    width: 20%;
    padding-bottom: 20%;
    height: 0;
    float:left;
  }

  .icons-item img{
    /*45px*/
    width: .9rem;
    height: .9rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;
  }

  .icons-item p {
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;
  }


</style>
