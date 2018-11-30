<template>
  <div>
    <!--头部导航部分-->
    <header id="header">
      <!--严选logo及搜索框-->
      <div class="logo_search">
        <!--网易严选logo-->
        <div class="logo"></div>
        <!--搜索框-->
        <div class="search">
          <i class="iconfont icon-sousuo1"></i>
          <span> 搜索商品, 共19601款好物</span>
        </div>
        <!--登录-->
        <div class="login">登录</div>
      </div>
      <div></div>
    </header>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #header
    position fixed
    top 0
    left 0
    right 0
    .logo_search
      padding 11px
      display flex
      align-items center
      .logo
        width 70px
        height 20px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
        background-size 100% 100%
      .search
        width 210px
        height 26px
        line-height 26px
        text-align center
        border-radius 5px
        background-color #EDEDED
        margin 0 15px
        font-size 14px
        color #666
        span
          vertical-align middle
        .iconfont
          font-size 20px
          vertical-align middle
      .login
        padding 4px
        border 1px solid #B4282D
        border-radius 5px
        color #B4282D
        font-size 11px
</style>
