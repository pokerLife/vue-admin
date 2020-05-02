import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import NProgress from 'nprogress'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css' // 解决浏览器差异
import 'swiper/css/swiper.css'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.css' // http://www.fontawesome.com.cn/faicons/

Vue.config.productionTip = false
console.log(api)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(transition => {
  NProgress.done()
})

Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
