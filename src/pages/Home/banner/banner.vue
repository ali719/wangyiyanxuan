<template>
  <!--轮播图-->
  <div class="swiper-container" id="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(pic,index) in pics" :key="index">
        <img v-lazy="pic.picUrl" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {reqBannerList} from '../../../api'
  export default {
    data(){
      return{
        pics:[]
      }
    },
    mounted(){
      reqBannerList()
        .then(res =>{
          if (res.code === 0){
            this.pics = res.data;
          }
        })
      setTimeout(() =>{
        new Swiper ('#banner', {
          loop: true, // 循环模式选项
          autoplay:true,//自动切换
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
        })
      },300)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  .swiper-container
    width 100%
    height 200px
    img
      width 100%
      height 100%
</style>
