<template>
  <!--人气推荐-->
  <div class="newProduct">
    <!--标题导航-->
    <div class="newTitle">
      <div class="text">人气推荐，精选好货</div>
      <div class="more">
        <span>查看全部<i class="iconfont icon-jiantou1"></i></span>
      </div>
    </div>
    <!--商品列表-->
    <div class="swiper-container" id="popular" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(list,index) in poplist" :key="index">
          <div class="liContent">
            <img v-lazy="list.scenePicUrl" alt="">
            <span class="name ellipsis">{{list.name}}</span>
            <span class="info ellipsis">{{list.simpleDesc}}</span>
            <span class="price">￥{{list.retailPrice}}</span>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    props:{
      poplist: {
        type: Array,
        default: function () {
          return []
        }
    }
    },
    mounted (){
      setTimeout(() =>{
        new Swiper ('#popular', {
          slidesPerView:2.5,
          spaceBetween :20
        })
      },300)
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .newProduct
    margin-top 10px
    .newTitle
      height 130px
      background-color #FEF7E3
      display flex
      flex-direction column
      align-items center
      justify-content center
      .text
        font-size 18px
        font-weight 700
        color #D1C3A3
      .more
        width 110px
        height 25px
        margin-top 10px
        background-color #F4E9CB
        display flex
        align-items center
        justify-content center
        span
          font-size 14px
          color #D1C3A3
    .swiper-container
      width 100%
      height 240px
      background-color #fff
      .swiper-wrapper
        .swiper-slide
          width 160px
          height 200px
          padding 10px 0
          .liContent
            display flex
            flex-direction column
            justify-content center
            img
              width 140px
              height 140px
            .name
              font-size 15px
              margin 5px 0
              display block
              width 140px
              height 20px
            .info
              font-size 12px
              margin-bottom 5px
              display block
              width 140px
              height 20px
            .price
              font-size 12px
              color red
</style>
