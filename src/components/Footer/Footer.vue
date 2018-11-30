<template>
  <footer id="footer">
    <span class="item" :class="{on:$route.path === '/home'}" @click="goto('/home')">
      <i class="iconfont icon-shouye3"></i>
      <span>首页</span>
    </span>
    <span class="item" :class="{on:$route.path === '/classify'}" @click="goto('/classify')">
       <i class="iconfont icon-iconyihuifu-"></i>
       <span>分类</span>
    </span>
    <span class="item" :class="{on:$route.path === '/thing'}" @click="goto('/thing')">
       <i class="iconfont icon-wupin"></i>
       <span>识物</span>
    </span>
    <span class="item" :class="{on:$route.path === '/shopcart'}" @click="goto('/shopcart')">
       <i class="iconfont icon-gouwuche"></i>
       <span>购物车</span>
    </span >
    <span class="item" :class="{on:$route.path === '/person'}" @click="goto('/person')">
       <i class="iconfont icon-gerenzhongxin"></i>
       <span>个人</span>
    </span>

  </footer>
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
  #footer
    top-border-1px(#e4e4e4)
    width 100%
    height 50px
    position fixed
    left 0
    bottom 0
    display flex
    .item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      font-size 14px
      margin 7px
      &.on
        color #B4282D
      .iconfont
        font-size 22px
</style>
