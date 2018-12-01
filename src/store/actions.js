/*
 Vuex最核心的管理对象
 */

import {reqHomeData} from '../api'
import {RECEIVE_HOME} from './mution-type'
export default {
  async getHomeData({commit}){
    const result =await reqHomeData()
    if (result.code === 0){
      const home = result.data
      commit(RECEIVE_HOME,{home})
    }
  }

}
