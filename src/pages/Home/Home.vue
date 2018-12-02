<template>
  <div id="home">
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
      <!--头部导航区域-->
      <NavList/>
      <router-view/>
    </header>
    <!--内容主体部分-->
    <section id="main">
      <!--轮播图-->
      <BannerList/>
      <!--网易自营三个保障-->
      <div class="serve">
        <ul class="serveList">
          <li>
            <img src="./images/duihao.png">
            <span>网易自营品牌</span>
          </li>
          <li>
            <img src="./images/duihao.png">
            <span>30天无忧退货</span>
          </li>
          <li>
            <img src="./images/duihao.png">
            <span>48小时快速退款</span>
          </li>
        </ul>
      </div>
      <!--新人专享礼-->
      <div class="newGift">
        <!--新人专享礼标题-->
        <div class="newGiftTitle">
          <span class="line"></span>
          <span class="text">新人专享礼</span>
          <span class="line"></span>
        </div>
        <!--图片区域-->
        <!--新人专享礼包-->
        <div class="giftImg">
          <div class="title">新人专享礼包</div>
          <img src="./images/lingqu.png" alt="">
        </div>
        <!--福利社-->
        <div class="welfareWrap">
          <div class="title">
            <div class="welfare">福利社</div>
            <div class="sale">今日特价</div>
          </div>
          <img src="./images/fuli.png">
        </div>
        <!--新人拼团-->
        <div class="welfareWrap">
          <div class="title">
            <div class="welfare">新人拼团</div>
            <div class="sale">1元起包邮</div>
          </div>
          <img src="./images/pt.png">
        </div>
        <div></div>
      </div>
      <!--品牌制造商直供-->
      <div class="brand">
        <!--导航标题-->
        <div class="brandTitle">
          <div class="title">品牌制造商直供</div>
          <div class="more">
            <span>更多</span>
            <i class="iconfont icon-jiantou1"></i>
          </div>
        </div>
        <!--四个制造商-->
        <div class="makeWarp">
          <div class="make1">
            <div class="makeName">海外制造商</div>
            <div class="makePrice">9.9元起</div>
          </div>
          <div class="make2">
            <div class="makeName">CK制造商</div>
            <div class="makePrice">25元起</div>
          </div>
          <div class="make3">
            <div class="makeName">新秀丽制造商</div>
            <div class="makePrice">34.9元起</div>
          </div>
          <div class="make4">
            <div class="makeName">MUJI制造商</div>
            <div class="makePrice">35元起</div>
          </div>
        </div>
      </div>
      <!--新品首发-->
      <NewItem :newlist="home.newItemList"/>
      <!--人气推荐-->
      <PopularItem :poplist="poplist"/>
      <!--严选限时购-->
      <div class="flashSale">
        <div class="time">
          <div class="title">严选限时购</div>
          <div class="countDown">
            <span class="number">01</span>
            <span class="symbol">:</span>
            <span class="number">33</span>
            <span class="symbol">:</span>
            <span class="number">10</span>
          </div>
          <div class="next">下一场22:00开始</div>
        </div>
        <div class="saleImg">
          <img src="./images/xiaolongxia.png" alt="">
        </div>
      </div>
      <!--福利社-->
      <img class="fuliImg" src="./images/fulishe.jpg" alt="">
      <!--专题精选-->
      <TopicList :topicList="home.topicList"/>
      <!--居家好物-->
      <CateList :cateList="home.cateList"/>
      <!--版权信息-->
      <div class="copyright">
          <div class="link">
            <a class="download">下载App</a>
            <a class="pc">电脑版</a>
          </div>
          <span>网易公司版权所有 © 1997-2018</span>
          <span>食品经营许可证：JY13301080111719</span>
      </div>
      <router-view/>
    </section>
    <div id="back">
      <i class="iconfont icon-danjiantoushang"></i>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import NavList from './navList/navList.vue'
  import BannerList from './banner/banner.vue'
  import NewItem from './newItem/newItem.vue'
  import PopularItem from './popularItem/popularItem.vue'
  import TopicList from './topicList/topicList.vue'
  import CateList from './cateList/cateList.vue'
  import Swiper from 'swiper'
  export default {
    data(){
      return{

      }
    },
    mounted (){
      //获取首页信息
      this.$store.dispatch('getHomeData')
    },
    computed:{
      ...mapState(['home']),
      poplist(){
        return this.home.popularItemList
      }
    },
    components:{
      BannerList,
      NavList,
      NewItem,
      PopularItem,
      TopicList,
      CateList
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #home
    #header
      width 100%
      top-border-1px(#e4e4e4)
      background-color #fff
      position fixed
      top 0
      left 0
      right 0
      z-index 10
      .logo_search
        padding 11px
        display flex
        align-items center
        .logo
          width 70px
          height 20px
          background-image url("./images/wangyiyanxuan.png")
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
    #main
      background-color #F4F4F4
      position relative
      top 79px
      left 0
      padding-bottom 50px
      .serve
        background-color #fff
        width 100%
        height 32px
        display flex
        align-items center
        justify-content center
        .serveList
          display flex
          li
            font-size 13px
            margin 0 10px
            img
              width 15px
              vertical-align middle
            span
              vertical-align middle
      .newGift
        margin-top 12px
        padding 15px
        padding-top 0
        height 240px
        background-color #fff
        .newGiftTitle
          height 40px
          display flex
          align-items center
          justify-content center
          .line
            display inline-block
            width 16px
            height 2px
            background-color #333
          .text
            font-size 18px
            margin 0 5px
        .giftImg
          float left
          width 170px
          height 205px
          background-color #F9E9CF
          .title
            font-size 18px
            padding-top 12px
            padding-left 12px
          img
            margin-top 30px
            margin-left 25px
            width 110px
        .welfareWrap
          float right
          width 160px
          height 90px
          padding-left 12px
          padding-top 12px
          background-color #F9E9CF
          border-bottom 2px solid #fff
          .title
            float left
            width 75px
            .welfare
              font-size 18px
            .sale
              margin-top 5px
              font-size 12px
              color #666
          img
            float right
            width 85px
      .brand
        height 340px
        margin-top 12px
        background-color #fff
        padding 15px
        padding-top 0
        .brandTitle
          height 50px
          display flex
          justify-content space-between
          align-items center
          .title
            font-size 19px
          .more
            font-size 14px
            .iconfont
              font-size 12px
        .makeWarp
          height 290px
          .make1
            float left
            width 50%
            height 50%
            text-align center
            background-image url("http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1")
            background-size 100%
            .makeName
              font-size 14px
              margin-top 10px
              margin-bottom 5px
            .makePrice
              font-size 12px

          .make2
            float left
            width 50%
            height 50%
            text-align center
            background-image url("http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png?imageView&thumbnail=343y260&enlarge=1")
            background-size 100%
            .makeName
              font-size 14px
              margin-top 10px
              margin-bottom 5px
            .makePrice
              font-size 12px
          .make3
            float left
            width 50%
            height 50%
            text-align center
            background-image url("http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1")
            background-size 100%
            .makeName
              font-size 14px
              margin-top 10px
              margin-bottom 5px
            .makePrice
              font-size 12px
          .make4
            float left
            width 50%
            height 50%
            text-align center
            background-image url("http://yanxuan.nosdn.127.net/053ecfefd033a9acd2cb95483e14fcb6.jpg?imageView&thumbnail=343y260&enlarge=1")
            background-size 100%
            .makeName
              font-size 14px
              margin-top 10px
              margin-bottom 5px
            .makePrice
              font-size 12px


      .flashSale
        background-color #fff
        height 160px
        padding 10px
        margin-top 10px
        display flex
        justify-content center
        .time
          width 160px
          height 160px
          display flex
          flex-direction column
          justify-content center
          align-items center
          .title
            font-size 20px
            font-weight 700
            letter-spacing 5px
            width 130px
            height 40px
            color #9B9B9B
          .countDown
            width 130px
            height 40px
            font-size 20px
            font-weight 700
            .number
              background-color #444
              color #fff
              padding 0 3px
          .next
            font-size 12px
            color #9B9B9B
            width 130px
            height 30px
        .saleImg
          width 160px
          height 160px
          img
            width 100%
            height 100%
      .fuliImg
        margin-top 10px
        width 100%
        height 150px
      .copyright
        width 100%
        height 100px
        padding-top 30px
        background-color #414141
        text-align center
        .link
          width 100%
          height 30px
          font-size 14px
          margin-bottom 10px
          a
            display inline-block
            width 75px
            height 25px
            line-height 25px
            text-align center
            border 1px solid #fff
            margin 0 30px
        span
          vertical-align middle
          display inline-block
          height 20px
          color #999
          font-size 12px
    #back
      background-color #fff
      width 50px
      height 50px
      line-height 50px
      border-radius 50%
      position fixed
      bottom 55px
      right 0
      text-align center
      z-index 10
      .iconfont
        font-size 34px
</style>
