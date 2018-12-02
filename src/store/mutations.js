/*
 Vuex最核心的管理对象
 */

import {RECEIVE_HOME,RECEIVE_CLASSFIY,RECEIVE_NAVINDEX} from './mution-type'
export default {
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_CLASSFIY](state,{classify}){
    state.classify = classify
  },
  [RECEIVE_NAVINDEX](state,{index}){
    state.navindex = index
  }
}
