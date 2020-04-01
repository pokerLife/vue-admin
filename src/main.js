import Vue from 'vue'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
  from '@fortawesome/vue-fontawesome'

import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css' // 解决浏览器差异
import 'swiper/css/swiper.css'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(transition => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
