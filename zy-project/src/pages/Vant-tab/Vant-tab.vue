<template>
  <van-tabs class="tabWrap" line-width="55px">
    <van-tab v-for="index in list" :title="index">
    </van-tab>
  </van-tabs>
</template>
<script>
  import Vue from 'vue';
  import axios from "axios"
  import { Tab, Tabs  } from 'vant';
  Vue.use(Tab).use(Tabs);
  export default {
    name: "Vant-tab",
    data(){
      return {
        list:[]
      }
    },
    async mounted(){
      let res = await axios.get("/tab");
      const list = res.data.data.map((item)=>{
        return item.title
      });
      this.list = list
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .tabWrap
    width 80%
</style>
