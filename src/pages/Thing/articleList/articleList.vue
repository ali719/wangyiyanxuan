<template>
    <div class="swiper-container" id="art">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(art,index) in column" :key="index">
        <div class="article">
          <img class="artImg" v-lazy="art.picUrl" alt="">
          <span class="artTitle">{{art.title}}</span>
        </div>
        <span class="number">{{art.articleCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    props:{
      column: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    mounted(){
      setTimeout(()=>{
        new Swiper ('#art', {
          slidesPerView:3.8,
          spaceBetween :15,

        },50)
      })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .swiper-slide
    width 100px
    height 100px
    position relative
    .article
      width 100%
      height 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
      .artImg
        width 90px
        height 70px
      .artTitle
        display inline-block
        height 30px
        line-height 30px
        font-size 12px
    .number
      display inline-block
      width 100%
      height 15px
      position absolute
      top 0
      right 0
      color #fff
      text-align end
      font-size 13px

</style>
