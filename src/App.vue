<template>
  <div id="app">
    <router-view/>
    <FooterGuide/>
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

</style>
