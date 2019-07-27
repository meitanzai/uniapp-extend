import Vue from 'vue'
import App from './App'
import iGlobal from './lib/global.js'

Vue.config.productionTip = false
Vue.prototype.iGlobal=iGlobal
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()