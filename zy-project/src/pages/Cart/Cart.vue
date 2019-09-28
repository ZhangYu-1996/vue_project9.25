<template>
  <div class="cart">
    <div class="cart-header">
        <div class="shop-cart">购物车</div>
        <a href="###" class="shop-pap">领劵</a>
    </div >
    <ul class="cart-title">
      <li>30天无忧退货</li>
      <li>48小时快速退款</li>
      <li>满88元免邮费</li>
    </ul>
    <div class="cart-content">
      <div class="cart-box">
        <div class="img"></div>
        <div class="cart-pap">去添加点什么吧</div>
        <van-button type="primary" class="cart-button" color="#B4282D" @click="$router.replace('/Login')">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Button } from 'vant';

  Vue.use(Button);
  export default {
    name: "Cart"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .cart
    width 100%
    position relative
    .cart-header
      height rem(100)
      display flex
      justify-content space-around
      align-items center
      .shop-cart
        font-size rem(40)
      .shop-pap
        font-size rem(32)
        color red
    .cart-title
      height rem(80)
      display flex
      justify-content space-around
      align-items center
      background-color #EEEEEE
      li
        font-size rem(24)
    .cart-content
      position relative
      .cart-box
        position absolute
        top rem(400)
        botton 0
        right 0
        left 0
        margin auto
        display flex
        flex-direction column
        justify-content center
        align-items center
        width 60%
        height rem(400)
      .img
        display inline-block
        width rem(248)
        height rem(248)
        background-size rem(248) rem(248)
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png")
      .cart-pap
        font-size rem(32)
        color #999999
      .cart-button
        width rem(500)
        margin-top rem(40)
</style>
