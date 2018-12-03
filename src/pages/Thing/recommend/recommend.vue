<template>
  <!--为你推荐-->
  <div class="recommend">
    <!--头部标题-->
    <div class="top">{{recommend.name}}</div>
    <!--白衣少年-->
    <div class="yang">
      <img class="recImg" :src="recommend.Item[0].picUrl">
      <div class="recText">
        <div class="recTitle">
          <span>{{recommend.Item[0].title}}</span>
          <span>{{recommend.Item[0].priceInfo}}元起</span>
        </div>
        <div class="recInfo">{{recommend.Item[0].subTitle}}</div>
      </div>
    </div>
    <!--丁三石的好货推荐-->
    <div class="dinglei">
      <div class="text">
        <div class="title">{{recommend.Item[1].title}}</div>
        <div class="info ellipsis">{{recommend.Item[1].subTitle}}</div>
      </div>
      <div class="image">
        <img :src="recommend.Item[1].picUrl" alt="">
        <span class="imgText">{{recommend.Item[1].typeName}}</span>
      </div>
    </div>
    <!--挑款师推荐-->
    <div class="dinglei">
      <div class="text">
        <div class="title ellipsis">{{recommend.Item[2].title}}</div>
        <div class="info ellipsis">{{recommend.Item[2].subTitle}}</div>
      </div>
      <div class="image">
        <img :src="recommend.Item[2].picUrl" alt="">
        <span class="imgText">{{recommend.Item[2].typeName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      recommend: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .recommend
    background-color #fff
    margin-top 10px
    padding 0 15px
    box-sizing border-box
    width 100%
    height 670px
    .top
      font-size 15px
      text-align center
      width 100%
      height 60px
      line-height 60px
    .yang
      width 100%
      height 280px
      border-radius 5px
      border 1px solid #d9d9d9
      .recImg
        width 100%
        height 190px
      .recText
        width 100%
        box-sizing border-box
        padding 0 8px
        font-size 18px
        .recTitle
          display flex
          justify-content space-between
          align-items center
          width 100%
          height 30px
          margin 5px 0
        .recInfo
          font-size 14px


    .dinglei
      border-radius 5px
      border 1px solid #d9d9d9
      margin-top 15px
      width 100%
      height 140px
      display flex
      justify-content space-between
      align-items center
      .text
        width 200px
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        .title
          width 180px
          margin 10px 10px
          font-size 17px
        .info
          width 180px
          margin 0 10px
          margin-left 10px
          font-size 14px
      .image
        width 140px
        height 140px
        position relative
        img
          width 100%
          height 100%
        .imgText
          position absolute
          top 5px
          left 10px
          padding 0 5px
          height 18px
          line-height 18px
          text-align center
          border-radius 10px
          background-color #fff
          font-size 12px


</style>
