<template>
  <div class="swiper-container" id="thingBan">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(ban,index) in banner" :key="index">
        <img v-lazy="ban.picUrl" alt="">
        <div class="content">
          <div class="headline">
            <span class="line"></span>
            <span class="text">{{ban.subTitle}}</span>
            <span class="line"></span>
          </div>
          <span class="title">{{ban.title}}</span>
          <span class="info">{{ban.desc}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    props:{
      banner: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    mounted(){
      setTimeout(()=>{
        new Swiper ('#thingBan', {
          loop: true, // 循环模式选项
          autoplay:true,
          slidesPerView:1.2,
          spaceBetween :15,
          centeredSlides:true
        })
      },50)

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .swiper-slide
    width 325px
    height 190px
    position relative
    img
      width 100%
      height 100%
      border-radius 5px
    .content
      position absolute
      top 50px
      left 47.5px
      width 230px
      height 100px
      background-color rgba(255,255,255,0.9)
      display flex
      flex-direction column
      justify-content center
      align-items center
      .headline
        width 100%
        height 20px
        display flex
        align-items center
        justify-content center
        font-size 9px
        .line
          display inline-block
          width 13px
          height 1px
          background-color #7f7f7f
        .text
          color #7f7f7f
          margin 0 4px
      .title
        font-size 16px
        font-weight 700
        margin 8px 0
      .info
        font-size 12px
</style>
