<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="this.$route.meta.showFoot"/>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer.vue'
export default {
    components:{
      FooterGuide:Footer
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./common/stylus/mixins.styl"
  #id
    width 100%
    height 100%
</style>
