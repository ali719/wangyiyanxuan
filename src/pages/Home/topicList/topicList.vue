<template>
  <!--专题精选-->
  <div class="special">
    <div class="specialTitle">
      <span>专题精选  <i class="iconfont icon-chakangengduochanpin"></i></span>
    </div>
    <!--专题图片列表-->
    <div class="swiper-container" id="special">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(topic,index) in topicList" :key="index">
          <img v-lazy="topic.scenePicUrl" alt="">
          <div class="textBig">
            <span class="info">{{topic.subtitle}}</span>
            <span class="price">{{topic.priceInfo}}元起</span>
          </div>
          <div class="textSmall">{{topic.title}}</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    props:{
      topicList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    mounted(){
      setTimeout(()=>{
        new Swiper ('#special', {
          slidesPerView:1.15,
          spaceBetween :10
        })
      },300)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .special
    background-color #fff
    width 100%
    .specialTitle
      width 100%
      height 55px
      display flex
      justify-content center
      align-items center
      span
        font-size 18px
    .swiper-container
      width 100%-10px
      height 210px
      margin-left 10px
      img
        width 100%
        height 160px
      .textBig
        width 100%
        height 30px
        display flex
        justify-content space-between
        align-items center
        .info
          font-size 14px
        .price
          margin-right 3px
          font-size 15px
          color #BA393D
      .textSmall
        font-size 10px
</style>
