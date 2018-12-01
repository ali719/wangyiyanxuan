<template>
  <!--头部导航区域-->
  <div class="navigate">
    <ul class="navList">
      <li v-for="(name,index) in navList" :key="index" @click="currentIndex(index)">
        <span :class="{'on':current === index}">{{name}}</span>
      </li>
    </ul>
    <!--小箭头-->
    <div class="arrows">
      <div class="icon"></div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        navList:['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current:0
      }
    },
    mounted(){
      new BScroll('.navigate', {
        scrollX: true,
        click: true
      })
    },
    methods:{
      currentIndex(index){
        this.current = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .navigate
    width 100%
    height 30px
    display flex
    flex-wrap nowrap
    position relative
    .navList
      height 100%
      margin-left 10px
      display flex
      flex-wrap nowrap
      li
        height 100%
        line-height 30px
        font-size 15px
        margin 0 7px
        span
          padding 4px 7px
          white-space nowrap
          &.on
            border-bottom 1px solid #B4282D
            color #B4282D

    .arrows
      width 50px
      height 100%
      position absolute
      top 0
      right 0
      background-color #fff
      .icon
        width 17px
        height 18px
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png")
        background-size 100% 100%
        margin 0 auto
        margin-top 7px
</style>
