import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Vant from 'vant';
// 引入全部样式
import 'vant/lib/index.css';
// 引入amfe-flexible.js设置根标签的字体大小
import 'amfe-flexible';
import axios from 'axios'


Vue.use(Vant)

Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://localhost:8877/lyq/'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')