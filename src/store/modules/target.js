/**
 * @description 页面标签
 * @author mr_zhaojie
 */

// initial state
const state = {
  target: []
}

// getters
const getters = {
  queryTarget: state => {
    return state.target
  }
}

// actions
const actions = {
  /** 添加标签 */
  addTarget ({ commit, state }, newTag) {
    commit('ADD_TARGET', newTag)
  }
}

// mutations
const mutations = {
  /** 添加标签 */
  ADD_TARGET (state, newTag) {
    state.target.map(item => {
      item.isActive = !item.isActive
    })
    if (state.target.some(v => v.path === newTag.path)) return
    // 激活菜单
    newTag.isActive = true
    state.target.push(newTag)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
