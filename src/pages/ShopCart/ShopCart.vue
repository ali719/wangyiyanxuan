<template>
  <div id="shopCart">
    <!--头部-->
    <header id="header">
      <div class="cart">购物车</div>
      <div class="info">
        <ul class="infoList">
          <li>30天无忧退货</li>
          <li>48小时快速退款</li>
          <li>满88元免邮费</li>
        </ul>
      </div>
    </header>
    <div class="cart_login">
      <img src="./images/cart.png" alt="">
      <span>去添加点什么吧</span>
      <div class="login">登录</div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  #shopCart
    background #f4f4f4
    height 100%
    width 100%
    #header
      width 100%
      height 80px
      .cart
        width 100%
        height 45px
        line-height 45px
        text-align center
        font-size 18px
        background-color #fff
      .info
        width 100%
        height 35px
        font-size 14px
        .infoList
          height 100%
          display flex
          align-items center
          justify-content space-around
    .cart_login
      width 100%
      height 550px
      font-size 15px
      display flex
      flex-direction column
      justify-content center
      align-items center

      img
        width 120px
        height 120px
      .login
        margin-top 10px
        text-align center
        width 240px
        height 45px
        line-height 45px
        background-color #B4282D
        color #fff
</style>
