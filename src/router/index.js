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
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/classify',
      component:Classify,
    },
    {
      path:'/thing',
      component:Thing,
    },
    {
      path:'/shopcart',
      component:ShopCart,
    },
    {
      path:'/person',
      component:Person,
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})
