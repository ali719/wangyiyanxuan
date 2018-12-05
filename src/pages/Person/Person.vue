<template>
  <div id="person">
    <!--头部-->
    <TopHeader/>
    <router-view/>
  </div>
</template>

<script>
  import TopHeader from '../../components/TopHeader/TopHeader.vue'
  import LoginReg from './loginReg/loginReg.vue'
  export default {
    components:{
      TopHeader,
      LoginReg
    },
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #person
    width 100%
    height 100%
    overflow hidden

</style>
