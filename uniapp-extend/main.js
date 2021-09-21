import Vue from 'vue'
import App from './App'

import store from './store'

import iGlobal from './lib/global.js'	//引入 global.js

Vue.config.productionTip = false

Vue.use(iGlobal)	// 使用 iGlobal

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()