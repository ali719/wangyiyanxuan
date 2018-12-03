/*
 Vuex最核心的管理对象
 */

import {reqHomeData,reqClassify,reqThing} from '../api'
import {RECEIVE_HOME,RECEIVE_CLASSFIY,RECEIVE_NAVINDEX,RECEIVE_THING} from './mution-type'
export default {
  //异步获取首页数据
    async getHomeData({commit}){
      const result =await reqHomeData()
      if (result.code === 0){
        const home = result.data
        commit(RECEIVE_HOME,{home})
      }
  },
  //异步获取分类数据
  async getClassifyData({commit}){
    const result =await reqClassify()
    if (result.code === 0){
      const classify = result.data
      commit(RECEIVE_CLASSFIY,{classify})
    }
  },
  //同步获取分类下标
  getNavIndex({commit},index){
    commit(RECEIVE_NAVINDEX,{index})
  },
  
  //异步获取识物数据
  async getThingData({commit}){
    const result =await reqThing()
    if (result.code === 0){
      const thing = result.data
      commit(RECEIVE_THING,{thing})
    }
  },

}
