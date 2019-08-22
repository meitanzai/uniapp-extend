import Vue from 'vue'
import App from './App'
import iGlobal from './lib/global.js'	//引入 global.js

Vue.config.productionTip = false
Vue.prototype.iGlobal=iGlobal	//将global.js挂载至Vue.prototype 实现全局调用
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()