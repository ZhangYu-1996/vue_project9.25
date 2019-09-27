<template>
  <van-swipe :autoplay="3000" class="vant-swipe">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image.urlImages" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import axios from "axios"
  import Vue from 'vue';
  import { Swipe, SwipeItem , Lazyload} from 'vant';
  Vue.use(Swipe).use(SwipeItem).use( Lazyload);

  export default {
    name: "Vant-swipe",
    data() {
      return {
        images: [
        ]
      }
    },
    async mounted(){
      let res = await axios.get("/swipe");
      const images =res.data.data.map((item)=>{
        return item
      });
      this.images=images
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .vant-swipe
    margin-top 10px
    img
      width 100%
</style>
