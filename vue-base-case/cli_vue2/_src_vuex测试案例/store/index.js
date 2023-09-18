import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
  // up: ({ commit }) => commit('UP'),
  // down: ({ commit }) => commit('DOWN'),

  upIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('UP')
    }
  },
  upAsync({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('UP')
        resolve()
      }, 2000)
    })
  }
}
const mutations = {
  UP(state) {
    state.count++
  },
  DOWN(state) {
    state.count--
  }
}
const state = {
  count: 0
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
