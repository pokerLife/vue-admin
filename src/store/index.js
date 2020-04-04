import Vue from 'vue'
import Vuex from 'vuex'
import autoImport from '../utils/util.store.import'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: autoImport()
})
