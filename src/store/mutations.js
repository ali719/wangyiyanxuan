/*
 Vuex最核心的管理对象
 */

import {RECEIVE_HOME} from './mution-type'
export default {
  [RECEIVE_HOME](state,{home}){
    state.home = home
  }
}
