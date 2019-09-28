<template>
<div class="app">
    <div class="rec-title">
      <HeaderTop>
        <span slot="content" class="content-slot">
            <span class="content-find">发现</span>
            <span class="content-sec">甄选家</span>
        </span>
      </HeaderTop>
    </div>
    <RecognitionVant></RecognitionVant>
    <div class="recognition-con">
      <img src="https://yanxuan.nosdn.127.net/2079bbd71b87befd24070a83f1080e58.jpg?imageView&quality=65&thumbnail=690y376" alt="" class="imgRec" width="80%">
    </div>
    <div class="recognition-new">
        <div class="new-title">
          新鲜的，有创意的，可以打开你新世界大门的好物，给你意想不到的生活惊喜！
        </div>
        <div class="new-img">
          <img src="https://yanxuan.nosdn.127.net/2c278f4048125b135ab8e3303de65b19.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        </div>
        <div class="new-count">
          <van-icon name="eye-o" class="new-icon"/>
          <span>16.9w人看过</span>
        </div>
    </div>
    <div class="recognition-food">
        <div class="food-box">
            <ul class="food-box-left">
                <li class="box-left-one">
                  <img src="https://yanxuan.nosdn.127.net/6bbce2ec26816a0068fa1f76c9d4ef77.png?imageView&quality=65&thumbnail=56y56" alt="">
                  <span>网易员工精选</span>
                </li>
                <li class="box-left-two">吃过猫山王，其他榴莲皆路人</li>
                <li class="box-left-three">开盒即食，全程冷鲜速达</li>
                <li class="box-left-four">
                  <van-icon name="eye-o" class="new-icon"/>
                  <span>16.9w人看过</span>
                </li>
            </ul>
            <div class="food-box-right">
              <img src="https://yanxuan.nosdn.127.net/3fb07b212a1c1d3a704f596ed5c31b2e.jpg?imageView&quality=65&thumbnail=272y272" alt="">
            </div>
        </div>
    </div>
    <div class="recognition-suit">
        <div class="new-title">
          保暖黑科技，自己能发热的保暖内衣，这个冬天可以穿得薄薄的美美的啦！
        </div>
        <div class="new-img">
          <img src="https://yanxuan.nosdn.127.net/d3a2e269f7117e8b183338a61cd276ed.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        </div>
        <div class="new-count">
            <van-icon name="eye-o" class="new-icon"/>
            <span>16.9w人看过</span>
        </div>

  </div>
</div>
</template>

<script>
  import RecognitionVant from "../../components/Recognition-vant/Recognition-vant.vue"
  export default {
    name: "Recognition",
    components:{
      RecognitionVant
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  @import "../../common/stylus/extend.styl"
  .app
    width 100%
    position relative
    .rec-title
     button-border-1px(red)
     .content-slot
        @extend .clearfix
        font-size rem(43)
        position absolute
        top rem(35)
        left rem(240)
        .content-find
          margin-right rem(30)
          color red
        .content-sec
          font-size rem(26)
          float right
          margin-top rem(15)
    .recognition-con
      top-border-5px(#F4F4F4)
      width 100%
      height rem(430)
      display flex
      justify-content center
      align-items center
    .recognition-new
      top-border-5px(#F4F4F4)
      width 100%
      .new-title
        width 90%
        padding-top rem(55)
        font-size rem(32)
        margin 0 auto
      .new-img
        width 100%
        height rem(380)
        display flex
        justify-content center
        align-items center
        img
          width 80%
      .new-count
        width 80%
        margin 0 auto
        display flex
        .new-icon
          display: inline-block;
          font-size rem(30)
          vertical-align: middle;
          color #999
        span
          font-size rem(24)
          display: inline-block;
          vertical-align: middle;
          color #999



    .recognition-food
      top-border-5px(#F4F4F4)
      width 100%
      .food-box
        width 90%
        margin 0 auto
        display flex
        .food-box-left
          width 39.4%
          .box-left-one
            width 100%
            img
              display inline-block
              border-radius 50%
              line-height:rem(36);
              width rem(50)
              height rem(50)
              padding-right rem(10)
            span
              font-size: rem(28);
              color: #333;
              line-height: rem(36);
              white-space: nowrap;

          .box-left-two
            width: 100%;
            font-size: rem(32);
            color: #333;
            line-height: rem(44);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            padding-top: rem(32);
            font-family: PingFangSC-Regular;

          .box-left-three
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: rem(28);
            line-height: rem(28);
            padding-top: rem(32);
            color: #7f7f7f;
          .box-left-four
            padding-top rem(32)
            width 80%
            margin 0 auto
            display flex
            .new-icon
              display: inline-block;
              font-size rem(30)
              vertical-align: middle;
              color #999
            span
              font-size rem(24)
              display: inline-block;
              vertical-align: middle;
              color #999
        .food-box-right
          width 58%
          img
            width 100%
            padding-top rem(20)





    .recognition-suit
      top-border-5px(#F4F4F4)
      width 100%
      .new-title
        width 90%
        padding-top rem(55)
        font-size rem(32)
        margin 0 auto
      .new-img
        width 100%
        height rem(380)
        display flex
        justify-content center
        align-items center
        img
          width 80%
      .new-count
        width 80%
        margin 0 auto
        display flex
        .new-icon
          display: inline-block;
          font-size rem(30)
          vertical-align: middle;
          color #999
        span
          font-size rem(24)
          display: inline-block;
          vertical-align: middle;
          color #999
</style>
