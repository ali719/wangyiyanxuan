<template>
  <!--更多精彩-->
  <div class="more">
    <div class="moreTop">
      <span class="line"></span>
      <span class="text">更多精彩</span>
      <span class="line"></span>
    </div>
    <div class="moreContent" v-for="(more,index) in yxWeek" :key="index">
      <img v-lazy="more.itemPicUrl" alt="">
      <div class="moreTitle">{{more.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      yxWeek: {
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
  .more
    width 100%
    .moreTop
      width 100%
      height 70px
      display flex
      align-items center
      justify-content center
      font-size 14px
      .line
        display inline-block
        width 100px
        height 1px
        background-color #d9d9d9
      .text
        color #7f7f7f
        margin 0 10px
    .moreContent
      margin 0 auto
      margin-bottom 15px
      width 350px
      height 250px
      background-color #fff
      display flex
      flex-direction column
      justify-content center
      align-items center
      img
        width 320px
        height 180px
      .moreTitle
        margin-top 15px
        font-size 14px
        color #333
        width 320px


</style>
