<template>
  <!--十点一刻-->
  <div class="eleven">
    <!--标题-->
    <div class="eleTitle">十点一刻</div>
    <!--话题列表-->
    <div class="topicList">
      <div class="swiper-container" id="eleven">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(ele,index) in tenfifteen" :key="index">
            <div class="topicMain">
            <div class="topicTop">
              <span class="line"></span>
              <span class="text">今日话题</span>
              <span class="line"></span>
            </div>
            <div class="topicName">{{ele.desc}}</div>
            <div class="topicInfo">{{ele.title}}</div>
            <div class="topicPeople">{{ele.participantNum}}人参与话题</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    props:{
      tenfifteen: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    mounted(){
      setTimeout(() => {
        new Swiper('#eleven', {
          slidesPerView: 1.17,
          spaceBetween: 15,
        })
      }, 50)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .eleven
    margin-top 10px
    background-color #fff
    .eleTitle
      font-size 14px
      text-align center
      width 100%
      height 60px
      line-height 60px
    .topicList
      width 100%
      padding-left 10px
      box-sizing border-box
      height 200px
      .topicMain
        width 300px
        height 185px
        padding-top 15px
        background-image url("../images/ten.png")
        background-size 100% 100%
        text-align center
        .topicTop
          width 100%
          height 20px
          display flex
          align-items center
          justify-content center
          font-size 10px
          margin-bottom 22px
          .line
            display inline-block
            width 13px
            height 1px
            background-color #7f7f7f
          .text
            color #7f7f7f
            margin 0 4px
        .topicName
          width 100%
          height 20px
          font-size 18px
          font-weight 700
        .topicInfo
          width 100%
          height 20px
          color #333
          font-size 14px
          margin-top 15px
          margin-bottom 27px
        .topicPeople
          width 100%
          height 20px
          color #333
          font-size 10px

</style>
