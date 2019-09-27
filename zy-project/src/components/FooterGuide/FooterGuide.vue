<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" @click="$router.replace('/Home')">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" @click="$router.replace('/Classify')">分类</van-tabbar-item>
    <van-tabbar-item icon="orders-o" @click="$router.replace('/Recognition')">识物</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" @click="$router.replace('/Cart')">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" @click="$router.replace('/Personage')">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import Vue from 'vue';
  import { Tabbar, TabbarItem } from 'vant';
  Vue.use(Tabbar).use(TabbarItem);
  export default {
    name: "FooterGuide",
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
