import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowGeo: null,
    searchbarValue: null,
    searchbarGeo: null,
    twitterScreenname: null
  },
  mutations: {
    setNowGeo (state, nowGeo) {
      state.nowGeo = nowGeo
    },
    setSearchbarValue (state, searchbarValue) {
      state.searchbarValue = searchbarValue
    },
    setSearchbarGeo (state, searchbarGeo) {
      state.searchbarGeo = searchbarGeo
    },
    setTwitterScreenname (state, twitterScreenname) {
      state.twitterScreenname = twitterScreenname
    }
  },
  actions: {
    setNowGeo ({commit}, nowGeo) {
      commit('setNowGeo', nowGeo)
    },
    setSearchbarValue ({commit}, searchbarValue) {
      commit('setSearchbarValue', searchbarValue)
    },
    setSearchbarGeo ({commit}, searchbarGeo) {
      commit('setSearchbarGeo', searchbarGeo)
    },
    setTwitterScreenname ({commit}, twitterScreenname) {
      commit('setTwitterScreenname', twitterScreenname)
    }
  }
})
