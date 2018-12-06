/**
 * Created by Administrator on 2018/11/29.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Person from '../pages/Person/Person.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Thing from '../pages/Thing/Thing.vue'
import PhoneLogin from '../pages/Person/phoneLogin/phoneLogin.vue'
import EmailLogin from '../pages/Person/emailLogin/emailLogin.vue'
import LoginReg from '../pages/Person/loginReg/loginReg.vue'
import Personal from '../pages/personal/personal.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/home',
      component:Home,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/thing',
      component:Thing,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/shopcart',
      component:ShopCart,
      meta: {
        showFoot: true
      }
    },
    {
      path:'/person',
      component:Person,
      children:[
        {
          path: '/person/phone',
          component: PhoneLogin,
        },
        {
          path: '/person/email',
          component: EmailLogin,
        },
        {
          path: '/person/logreg',
          component: LoginReg,
        },
        {
          path:'',
          redirect:'/person/logreg'
        },
      ]
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})
