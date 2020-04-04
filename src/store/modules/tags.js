/**
 * @description 导航标签
 * @author mr_zhaojie
 */

const state = {
  tags: []
}

const getters = {
  tags: state => {
    return state.tags
  }
}

const actions = {
  addTags ({ commit }, newTag) {
    commit('ADD_TAGS', newTag)
  },
  delTags ({ commit }, currentTag) {
    commit('DEL_TAGS', currentTag)
  }
}

const mutations = {
  ADD_TAGS (state, newTag) {
    const tags = state.tags
    tags.forEach(v => {
      v.isActive = false
      if (v.id === newTag.id) {
        v.isActive = true
      }
    })
    // 标签已存在
    if (tags.some(v => v.path === newTag.path)) return
    // 激活菜单
    newTag.isActive = true
    tags.push(newTag)
  },

  DEL_TAGS (state, currentTag) {
    const tags = state.tags
    const pos = tags.findIndex(item => item.id === currentTag.id)
    // 当前标签激活且在最前面
    const isFirst = currentTag.isActive && pos === 0
    // 标签激活且在最后面
    const isLast = currentTag.isActive && pos === tags.length - 1
    // 标签激活且在中间
    const isMiddle = currentTag.isActive
    if (isFirst) {
      tags[pos].isActive = false
      tags[pos + 1].isActive = true
    } else if (isLast) {
      tags[pos].isActive = false
      tags[pos - 1].isActive = true
    } else if (isMiddle) {
      tags[pos].isActive = false
      tags[pos + 1].isActive = true
    }

    tags.splice(pos, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
