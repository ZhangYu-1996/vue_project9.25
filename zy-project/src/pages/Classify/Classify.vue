<template>
<div class="classify">
  <van-search placeholder="搜索商品，共23799款好物" input-align="center" class="classify-search"/>
  <div class="classify-px"></div>
  <div class="classify-content">
    <div class="classify-side">
        <van-sidebar v-model="activeKey" >
          <van-sidebar-item v-for="item in list" :title="item.name" />
        </van-sidebar>
    </div>
    <div class="classify-right" >
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <van-grid :column-num="3" :border="false">
        <van-grid-item
                v-for="(data,index) in datas"
                :key="index"
                :icon="data.wapBannerUrl"
                :text="data.name"

        />
      </van-grid>
    </div>
  </div>

</div>
</template>

<script>
  import Vue from 'vue';
  import axios from "axios"
  import { Search ,Sidebar, SidebarItem, Swipe, SwipeItem } from 'vant';
  Vue.use(Search).use(Sidebar).use(SidebarItem).use(Swipe).use(SwipeItem);
  export default {
    name: "Classify",
    data() {
      return {
        list:[],
        datas:[],
        activeKey: 0,
        images: [
          'https://yanxuan.nosdn.127.net/01467535cd09249bd5cf0ae110845892.jpg?imageView&quality=75&thumbnail=0x196',
          'https://yanxuan.nosdn.127.net/4c5498f6aaf99770f9cb05f9b069c46e.jpg?imageView&quality=75&thumbnail=0x196'
        ]
      };
    },
    async mounted() {
      let res = await axios.get("/sideData");
      this.list = res.data.data.categoryL1List;
      this.datas = res.data.data.currentCategory.subCateList;
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import "../../common/stylus/mixins.styl"
  .classify
    width 100%
    .classify-px
      top-border-1px(#41e0dc)
      margin-bottom rem(20)
    .classify-content
      position relative
      width 100%
      .classify-side
        position absolute
        left 0
        top 0
        width 20%
      .classify-right
        position absolute
        right rem(20)
        width 70%
        img
           width 100%
           height rem(205)
        &>>>.van-swipe__indicator
           width rem(40)
           height rem(4)
           border-radius rem(5)
           margin-bottom rem(5)



</style>
