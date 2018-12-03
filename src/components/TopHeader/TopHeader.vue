<template>
  <!--头部-->
  <header class="topHeader">
    <span @click="goto('/home')"><i class="iconfont icon-shouye"></i></span>
    <img class="topImg" src="./images/wangyiyanxuan.png">
    <span>
        <i class="iconfont icon-sousuo2"></i>
        <i class="iconfont icon-gouwuche3" @click="goto('/shopcart')"></i>
      </span>
  </header>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .topHeader
    bottom-border-1px(#e4e4e4)
    position fixed
    top 0
    left 0
    background-color #fff
    width 100%
    padding 0 10px
    box-sizing border-box
    height 44px
    display flex
    justify-content space-between
    align-items center
    z-index 10
    .iconfont
      font-size 28px
    .topImg
      width 82px
      height 23px
    span
      display inline-block
      width 70px

</style>
