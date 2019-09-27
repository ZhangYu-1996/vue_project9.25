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
         &#xe674;
         <span class="home-grid-font">网易自营品牌</span>
       </li>
       <li class="iconfont">
         &#xe600;
         <span class="home-grid-font">30天无忧退货</span>
       </li>
       <li class="iconfont">
         &#xe601;
         <span class="home-grid-font">48小时快速退款</span>
       </li>
     </ul>
   </div>
   <VantGrid class="home-grid-button"></VantGrid>

 </div>
</template>

<script>
  import VantSwipe from "../../pages/Vant-swipe/Vant-swipe"
  import VantTab from "../../pages/Vant-tab/Vant-tab"
  import VantGrid from "../../pages/Vant-grid/Vant-grid"
  import Vue from 'vue';
  import { Icon } from 'vant';
  Vue.use(Icon);
  export default {
    name: "Home",
    components:{
      VantSwipe,
      VantTab,
      VantGrid
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
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
</style>
