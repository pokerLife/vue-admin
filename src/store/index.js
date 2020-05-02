import Vue from 'vue'
import Vuex from 'vuex'
/**
 * 自动注册store模块
 * 按业务划分模块存放在./modules目录下
 * example getters: this.$store.getters['user/token']
 * example actions: this.$store.dispatch('user/updateToken', { userId:'' })
 */

Vue.use(Vuex)

const files = require.context('@/store/modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  modules
})
