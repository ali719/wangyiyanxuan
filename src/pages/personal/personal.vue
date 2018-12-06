<template>
  <div>个人中心
    <button @click="goto">退出登陆</button>
  </div>
</template>

<script>
  export default {
    methods:{
      goto(){
        this.$router.replace('/person')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
