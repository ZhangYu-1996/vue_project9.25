<template>
<div class="app">
  <HeaderTop>
    <span slot="content" class="content-slot">
        <span class="content-find">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        </span>
    </span>
  </HeaderTop>
  <div class="personage-con">
    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
  </div>
  <div class="personage-btn">
    <div class="personage-btn1">
      <van-button type="info" color="red" class="vant-btn1">
        <van-icon name="phone-o" class="btn-phone"/>
          手机号快捷登录
      </van-button>
    </div>
    <div class="personage-btn2">
      <van-button type="warning" class="vant-btn2">
        <van-icon name="envelop-o" />
        邮箱账号登录
      </van-button>
    </div>
  </div>
  <div class="personage-bottom">
      <span class="iconfont wechat">&#xe614;微信</span>
      <span class="iconfont qq">&#xe61a;QQ</span>
      <span class="iconfont weibo">&#xe60e;微博</span>
  </div>
</div>
</template>

<script>
  import Vue from 'vue';
  import { Button,Icon} from 'vant';

  Vue.use(Button).use(Icon);
  export default {
    name: "Personage"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .app
    width 100%
    position relative
    .content-slot
      font-size rem(43)
      position absolute
      top rem(35)
      left rem(240)
      img
        width rem(150)
        height rem(45)
        margin-left rem(30)
    .personage-con
      background-color #F2F5F4
      height rem(600)
      display flex
      justify-content center
      align-items center
      img
        width rem(200)
        height rem(80)
    .personage-btn
      background-color #F2F5F4
      height rem(400)
      .personage-btn1
        display flex
        justify-content center
        .vant-btn1
          width 80%
          margin-top rem(30)
      .personage-btn2
        display flex
        justify-content center
        .vant-btn2
          width 80%
          margin-top rem(30)
    .personage-bottom
        display flex
        justify-content center
        align-items center
        .wechat
          color gray
          border-right rem(4) solid gray
          padding-right rem(30)
        .qq
          color gray
          border-right rem(4) solid gray
          padding-right rem(30)
          padding-left rem(30)
        .weibo
          color gray
          padding-left rem(30)


</style>
