import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
//引入全局配置文件
import $conf from './common/config/config'
Vue.prototype.$conf=$conf
Vue.config.productionTip = false
//VUE.js项目中控制台报错： Uncaught (in promise) NavigationDuplicated解决方法
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
