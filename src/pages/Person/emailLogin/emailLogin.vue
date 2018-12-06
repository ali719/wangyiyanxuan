<template>
  <div id="phoneLog">
    <!--图片logo-->
    <div class="logo">
      <img src="./images/yanxuan.png">
    </div>
    <!--登录信息-->
    <div class="loginInfo">
      <div class="username">
        <input type="text" placeholder="邮箱账号">
      </div>
      <div class="message">
        <input type="text" placeholder="密码">
      </div>
      <div class="pro_pwd">
        <div>注册账号</div>
        <div>忘记密码</div>
      </div>
    </div>
    <!--登录-->
    <div class="login_reg">
      <div class="phone">
        <span>登录</span>
      </div >
      <div class="email" @click="$router.back()">
        <span>其他登录方式</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components:{
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  #phoneLog
    height 100%
    background-color #fff
    .logo
      margin-top 45px
      text-align center
      width 100%
      height 100px
      line-height 100px
      img
        width 95px
        height 32px
    .loginInfo
      margin-top 35px
      width 100%
      padding 0 20px
      box-sizing border-box
      height 170px
      .username
        width 100%
        height 50px
        bottom-border-1px(#c5cddb)
        input
          height 30px
          font-size 14px
          border none
          outline none
      .message
        margin-top 10px
        width 100%
        height 50px
        bottom-border-1px(#c5cddb)
        input
          height 30px
          font-size 14px
          border none
          outline none
      .pro_pwd
        margin-top 15px
        width 100%
        height 30px
        font-size 14px
        display flex
        align-items center
        justify-content space-between
        div
          color #666
    .login_reg
      width 100%
      height 110px
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

</style>
