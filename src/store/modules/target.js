/**
 * @description 页面标签管理
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
  addTarget ({ commit, state }, newTag) {
    commit('ADD_TARGET', newTag)
  },
  delTarget ({ commit, state }, currentTag) {
    commit('DEL_TARGET', currentTag)
  }
}

// mutations
const mutations = {
  ADD_TARGET (state, newTag) {
    const target = state.target
    target.forEach(v => {
      v.isActive = false
      if (v.id === newTag.id) {
        v.isActive = true
      }
    })
    // 标签已存在
    if (target.some(v => v.path === newTag.path)) return
    // 激活菜单
    newTag.isActive = true
    target.push(newTag)
  },

  DEL_TARGET (state, currentTag) {
    const target = state.target
    const pos = target.findIndex(item => item.id === currentTag.id)
    // 当前标签激活且在最前面
    const isFirst = currentTag.isActive && pos === 0
    // 标签激活且在最后面
    const isLast = currentTag.isActive && pos === target.length - 1
    // 标签激活且在中间
    const isMiddle = currentTag.isActive
    if (isFirst) {
      target[pos].isActive = false
      target[pos + 1].isActive = true
    } else if (isLast) {
      target[pos].isActive = false
      target[pos - 1].isActive = true
    } else if (isMiddle) {
      target[pos].isActive = false
      target[pos + 1].isActive = true
    }

    target.splice(pos, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
