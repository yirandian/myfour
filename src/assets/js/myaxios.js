// 导入vue
import Vue from 'vue'
// 导入 axios
import axios from 'axios'
// 创建axios 的插件
var myaxios = {}
// 添加 install 方法
myaxios.install = function(Vue) {
    // 统一配置 axios 的请求路径
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
    // 给 vue 添加方法
    Vue.prototype.$http = axios
}
// 将对象暴露出去
export default myaxios