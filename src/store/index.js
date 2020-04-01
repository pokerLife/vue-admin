import Vue from 'vue'
import Vuex from 'vuex'
import target from './modules/target'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app: target
  },
  strict: debug
})
