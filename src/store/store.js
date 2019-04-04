import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: '',
    token: null
  },
  mutations: {
    [types.USER]: (state, data) => {
      console.log(state, data)
      localStorage.user = data;
      state.user = data;
    },
    [types.LOGIN]: (state, data) => {
      localStorage.token = data;
      state.token = data;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      state.token = null
    },
  }
})
