import Vue from 'vue'
import App from './App'
import store from './store'
import iGlobal from './lib/global.js'	//引入 global.js
// import route from './route/route.js'
// import helangRoute from './uni_modules/helang-route/js_sdk/route.js'


Vue.use(iGlobal)	// 使用 iGlobal
// Vue.use(helangRoute,route)	// 使用路由配置

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()