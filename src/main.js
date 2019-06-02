// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入 element-ui 
import ElementUI from 'element-ui'
// 导入 element 的样式
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// 导入 axios
import myaxios from './assets/js/myaxios.js'
// 调用方法
Vue.use(myaxios)
Vue.use(ElementUI)
// 引入全局样式 index.css
import './assets/css/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
