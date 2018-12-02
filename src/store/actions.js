/*
 Vuex最核心的管理对象
 */

import {reqHomeData,reqClassify} from '../api'
import {RECEIVE_HOME,RECEIVE_CLASSFIY,RECEIVE_NAVINDEX} from './mution-type'
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
  }

}
