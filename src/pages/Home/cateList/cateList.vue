<template>
  <!--居家好物-->
  <div >
    <!--v-for="(cate,index) in cateList" :key="index"-->
    <div class="cateList" v-for="(cate,index) in cateList" :key="index">
      <div class="title">{{cate.name}}好物</div>
      <ul class="shopList">
        <li v-for="(item,index) in cate.itemList" :key="index" v-if="index<7">
          <img v-lazy="item.listPicUrl">
          <div class="simpleDesc ellipsis">{{item.simpleDesc}}</div>
          <div class="shopName ellipsis">{{item.name}}</div>
          <div class="shopPrice">￥{{item.retailPrice}}</div>
        </li>
        <li class="more">
          <div>
            <p>更多{{cate.name}}好物</p>
            <i class="iconfont icon-gengduo2"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      cateList: {
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
  .cateList
    margin-top 10px
    background-color #fff
    width 100%
    .title
      width 100%
      height 60px
      font-size 14px
      display flex
      justify-content center
      align-items center
    .shopList
      width 100%
      display flex
      flex-wrap wrap
      align-content center
      li
        width 176px
        height 270px
        margin-left 8px
        &.more
          display flex
          flex-direction column
          justify-content center
          align-items center
          text-align center
          p
            font-size 20px
            margin-bottom 10px
          .iconfont
            font-size 24px
        img
          width 172px
          height 172px
        .simpleDesc
          background-color #F1ECE2
          color #AF9E7A
          font-size 10px
          padding 10px 0
          padding-left 5px
          width 167px
          height 15px
        .shopName
          margin-top 5px
          font-size 14px
          height 25px
          width 172px
        .shopPrice
          font-size 16px
          color red
          height 16px
          width 172px
</style>
