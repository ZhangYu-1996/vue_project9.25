<template>
 <div id="app">
   <div class="header-container">
     <div class="line">
       <a   class="logo"></a>
       <a  class="m-topSearchIpt ipt" >
         <i class="icon" ></i>
         <span class="placeholder" >
            <span >商品搜索, 共</span> <span >5116</span> <span >款好物</span>
          </span>
       </a>
       <div class="loginBtn">登录</div>
     </div>
   </div>
   <div class="tab">
     <VantTab></VantTab>
     <div class="vant_icon">
       <van-icon name="arrow-down" />
     </div>
   </div>
   <VantSwipe></VantSwipe>
   <div class="home-grid">
     <ul class="home-grid-top">
       <li class="iconfont">
         &#xe600;
         <span class="home-grid-font">网易自营品牌</span>
       </li>
       <li class="iconfont">
         &#xe674;
         <span class="home-grid-font">30天无忧退货</span>
       </li>
       <li class="iconfont">
         &#xe601;
         <span class="home-grid-font">48小时快速退款</span>
       </li>
     </ul>
   </div>
   <VantGrid class="home-grid-button"></VantGrid>
   <div class="home-newer">
      <div class="home-newer-con"> — 新人专享礼 —</div>
      <div class="home-newer-img">
        <div class="home-newer-left">
          <span class="newer-con">新人专享礼包</span>
          <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
        </div>
        <div class="home-newer-right">
          <div class="newer-right-top">
              <div class="right-top-one">
                <div class="top-one">福利社</div>
                <div class="top-two">今日特价</div>
              </div>
              <img class="top-img" src="https://yanxuan-item.nosdn.127.net/eddaeb4852b8a4732102eab839641c95.png?imageView&thumbnail=200x200&quality=75" alt="" >
              <span class="top-circle">
                <span class="circle-one">￥199</span>
                <span class="circle-two">￥399</span>
              </span>
          </div>
          <div class="newer-right-button">
            <div class="right-top-one">
              <div class="top-one">福利社</div>
              <div class="top-two">今日特价</div>
            </div>
            <img class="top-img" src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75" alt="" >
            <span class="top-circle">
                <span class="circle-one">￥111</span>
                <span class="circle-two">￥311</span>
              </span>
          </div>
        </div>
      </div>
    </div>
   <div class="home-pro">
     <div class="home-pro-title">
        <span class="pro-title-one">品牌制造商</span>
        <span class="pro-title-two">更多 ></span>
     </div>
     <ul class="home-pro-con">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
     </ul>
   </div>
 </div>
</template>

<script>
  import VantSwipe from "../../components/Vant-swipe/Vant-swipe"
  import VantTab from "../../components/Vant-tab/Vant-tab"
  import VantGrid from "../../components/Vant-grid/Vant-grid"
  import Vue from 'vue';
  import { Icon } from 'vant';
  Vue.use(Icon);
  export default {
    name: "Home",
    components:{
      VantSwipe,
      VantTab,
      VantGrid,

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
@import "../../common/stylus/extend.styl"
  .header-container
    overflow hidden
    background-color #fff;
    position relative
    .line
        display flex;
        flex-flow row nowrap;
        align-items center;
        padding rem(15.9998) rem(30);
        width 100%;
        .logo
          width rem(138);
          height rem(39.98);
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
          display inline-block;
          margin-right rem(33.1204);
          background-size cover;
          background-position center;
        .m-topSearchIpt
          display flex;
          flex-flow row nowrap;
          align-items center;
          justify-content center;
          width 52%;
          height rem(80);
          font-size rem(32);
          background-color #ededed;
          border-radius rem(20);
          text-decoration none;
          .icon
            vertical-align middle;
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
            background-repeat no-repeat;
            background-size 100% 100%;
            margin-right .13333rem;
            display inline-block;
            width rem(28);
            height rem(28);
          .placeholder
            color #666;
            text-decoration none;
            font-size rem(28)
        .loginBtn
          width rem(80)
          height: rem(35);
          line-height: rem(35);
          position absolute
          right rem(40)
          text-align: center;
          color: #b4282d;
          border: 1px solid #b4282d;
          border-radius: rem(8);
          margin-left: rem(26.4956);
          font-size: rem(26);
  .tab
    width 100%
    position relative
    .vant_icon
      font-size rem(50)
      position absolute
      right rem(35)
      top rem(20)
  .home-grid
    width 100%
    margin-bottom rem(10)
    .home-grid-top
      display flex
      justify-content space-around
      .iconfont
        color red
        font-size rem(24)
        .home-grid-font
          color #000


  .home-grid-button
    top-border-1px(#A0C5E8)
  .home-newer
    width 100%
    top-border-5px(#A0C5E8)
    .home-newer-con
      padding-top rem(30)
      text-align center
      font-size rem(32)
    .home-newer-img
      margin-top rem(15)
      display flex
      justify-content space-around
      .home-newer-left
          width 45%
          height rem(400)
          background-color pink
          display flex
          justify-content center
          align-items center
          position relative
          .newer-con
            font-size rem(30)
            position absolute
            left rem(20)
            top rem(15)
          img
            width 70%
            height 50%
      .home-newer-right
          width 45%
          .newer-right-top
            height rem(195)
            background pink
            position relative
            .top-img
              position absolute
              top rem(0)
              right rem(0)
              width rem(200)
              height rem(200)
            .top-circle
              width rem(80)
              height rem(80)
              background-color #fff35d
              border-radius 50%
              position absolute
              top rem(20)
              right rem(20)
              display flex
              flex-direction column
              align-items center
              justify-content center
              .circle-one
                width rem(20)
                height rem(20)
                font-size rem(8)
                padding-right  rem(48)
                padding-top rem(5)
              .circle-two
                width rem(20)
                height rem(20)
                font-size rem(8)
                padding-right  rem(48)
                padding-top rem(5)
                text-decoration line-through
            .right-top-one
              position absolute
              top rem(20)
              left rem(40)
              .top-one
                font-size rem(30)
              .top-two
                font-size rem(20)
                color #030906
          .newer-right-button
            position relative
            height rem(195)
            background #ff54a3
            margin-top rem(10)
            .top-img
              position absolute
              top rem(0)
              right rem(0)
              width rem(200)
              height rem(200)
            .top-circle
              width rem(80)
              height rem(80)
              background-color #fff35d
              border-radius 50%
              position absolute
              top rem(20)
              right rem(20)
              display flex
              flex-direction column
              align-items center
              justify-content center
              .circle-one
                width rem(20)
                height rem(20)
                font-size rem(8)
                padding-right  rem(48)
                padding-top rem(5)
              .circle-two
                width rem(20)
                height rem(20)
                font-size rem(8)
                padding-right  rem(48)
                padding-top rem(5)
                text-decoration line-through
            .right-top-one
              position absolute
              top rem(20)
              left rem(40)
              .top-one
                font-size rem(30)
              .top-two
                font-size rem(20)
                color #030906


  .home-pro
    top-border-5px(#A0C5E8)
    margin-top rem(30)
    width 100%
    .home-pro-title
      @extend .clearfix
      padding-top rem(30)
      .pro-title-one
          font-size rem(32)
          float left
          margin-left rem(20)
      .pro-title-two
          font-size rem(24)
          float right
          margin-right rem(20)


</style>
