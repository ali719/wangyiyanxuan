<template>
  <div id="phoneLog">
    <!--图片logo-->
    <div class="logo">
      <img src="./images/yanxuan.png">
    </div>
    <!--登录信息-->
    <div class="loginInfo">
      <div class="username">
        <input maxlength="11" type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="message">
        <input type="text" placeholder="请输入短信验证码" v-model="code">
        <button :disabled="!isRightPhone ||countDown>0 " class="msg" :class="{rightPhone:isRightPhone}" @click="sendCode">
          {{countDown>0 ? `已发送${countDown}s` : '获取验证码'}}
        </button>
      </div>
      <div class="pro_pwd">
        <div>遇到问题？</div>
        <div>使用密码登录</div>
      </div>
    </div>
    <!--登录-->
    <div class="login_reg">
      <div class="phone" @click="login">
        <span>登录</span>
      </div >
      <div class="email" @click="$router.back()">
        <span>其他登录方式</span>
      </div>
      <div class="register">
        <span>注册账号<i class="iconfont icon-jiantou1"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
  export default {
    data(){
      return{
        phone:'',//获取手机号
        code:'',//短信验证码
        countDown:0,//倒计时
      }
    },
    computed:{
      isRightPhone(){
        return /^1[34578]\d{9}$/.test(this.phone)
      }
    },
    methods:{
      sendCode(){
        this.countDown = 30
        const interId = setInterval(()=>{
          this.countDown--
          if (this.countDown <=0){
            this.countDown = 0
            clearInterval(interId)
          }
        },1000)
      },
      login(){
        if (!this.isRightPhone){
          return MessageBox.alert('请输入正确的手机号！')
        }else if (!/^\d{6}$/.test(this.code)){
          return MessageBox.alert('请输入正确的验证码！')
        }else {
          this.$router.replace('/personal')
        }
      }
    },
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
        position relative
        input
          height 30px
          font-size 14px
          border none
          outline none
        .msg
          position absolute
          top 10px
          right 0
          border-radius 5px
          border 1px solid #666
          color #666
          text-align center
          width 90px
          height 30px
          line-height 30px
          font-size 14px
          background-color #fff
          &.rightPhone
            color black
            border 1px solid black
      .pro_pwd
        margin-top 15px
        width 100%
        height 30px
        font-size 14px
        display flex
        align-items center
        justify-content space-between
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

</style>
