<template>
  <div id="thing">
    <!--头部-->
    <TopHeader/>
    <!--内容区域-->
    <section id="content">
      <!--轮播图-->
      <div class="banWrap">
        <Banner :banner="thing.banner"/>
      </div>
      <!--文章列表-->
      <div class="articleWrap">
        <ArticleList :column="thing.column"/>
      </div>
        <!--为你推荐-->
      <Recommend :recommend="thing.recommend"/>
      <!--十点一刻-->
      <Eleven :tenfifteen="thing.tenfifteen"/>
      <!--严选臻品-->
      <Zhenxuan :zhen="thing.zhen"/>
      <!--严选LOOK-->
      <div class="look">
        <div class="lookTop">严选LOOK</div>
        <img v-if="thing.yxLook" class="lookImg" src="./images/look.jpg" alt="">
        <div class="lookAuthor" v-if="thing.yxLook">
          <img :src="thing.yxLook.avatar" alt="">
          <span>{{thing.yxLook.nickname}}</span>
        </div>
        <div class="lookText" v-if="thing.yxLook">{{thing.yxLook.content}}</div>
      </div>
      <!--更多精彩-->
      <More :yxWeek="thing.yxWeek"/>
    </section>
  </div>
</template>

<script>
  import TopHeader from '../../components/TopHeader/TopHeader.vue'
  import Banner from './banner/banner.vue'
  import ArticleList from './articleList/articleList.vue'
  import Recommend from './recommend/recommend.vue'
  import Zhenxuan from './zhen/zhen.vue'
  import Eleven from './eleven/eleven.vue'
  import More from './more/more.vue'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getThingData')
    },
    computed:{
      ...mapState(['thing'])
    },
    components:{
      TopHeader,
      Banner,
      ArticleList,
      Recommend,
      Zhenxuan,
      Eleven,
      More
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #thing
    #content
      width 100%
      margin-top 45px
      .banWrap
        background-color #fff
        width 100%
        box-sizing border-box
        height 220px
        padding 15px 0
        padding-left 10px
      .articleWrap
        width 100%-10px
        margin-top 15px
        padding-left 10px
      .look
        width 100%
        height 560px
        margin-top 10px
        background-color #fff
        .lookTop
          width 100%
          height 60px
          line-height 60px
          font-size 15px
          text-align center
        .lookImg
          width 100%
          height 375px
        .lookAuthor
          width 100%
          height 30px
          box-sizing border-box
          padding-left 10px
          display flex
          align-items center
          img
            width 20px
            height 20px
            margin-right 10px
            border-radius 50%
          span
            font-size 14px
        .lookText
          font-size 14px
          width 100%
          box-sizing border-box
          padding 10px
          line-height 25px
          height 80px
</style>
