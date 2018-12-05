<template>
  <div id="loginReg">
    <!--图片logo-->
    <div class="logo">
      <img src="../images/yanxuan.png" alt="">
    </div>
    <!--登录-->
    <div class="login_reg">
      <router-link to="/person/phone" >
        <div class="phone">
        <span>手机号码登录</span>
      </div >
      </router-link>
      <router-link to="/person/email">
        <div class="email">
        <span>邮箱账号登录</span>
      </div>
      </router-link>
      <div class="register">
        <span>手机号快速注册<i class="iconfont icon-jiantou1"></i></span>
      </div>
    </div>
    <!--底部连接-->
    <div class="footerLink">
      <div class="link">
        <span><i class="iconfont icon-weixin"></i>微信</span>
      </div>
      <div class="link">
        <span><i class="iconfont icon-qq"></i>QQ</span>
      </div>
      <div class="link">
        <span><i class="iconfont icon-weibo2"></i>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  #loginReg
    .logo
      margin-top 45px
      text-align center
      width 100%
      height 240px
      line-height 285px
      img
        width 134px
        height 45px
    .login_reg
      width 100%
      height 146px
      display flex
      flex-direction column
      justify-content space-between
      align-items center
      .phone
        width 335px
        height 47px
        background-color #B4282D
        font-size 15px
        text-align center
        line-height 47px
        span
          color #fff
      .email
        width 333px
        height 45px
        font-size 15px
        border 1px solid #B4282D
        text-align center
        line-height 47px
        span
          color #B4282D
      .register
        font-size 14px
        text-align center
        line-height 20px
        width 335px
        height 20px
    .footerLink
      width 100%
      height 20px
      font-size 14px
      position fixed
      left 0
      bottom 50px
      display flex
      justify-content center
      align-items center
      .link
        width 91px
        height 20px
        border-right 1px solid #999
        line-height 20px
        text-align center
        span
          color #666
        .iconfont
          color #666

</style>
