import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		skin: `
			--nav-bg:#42b983;
			--nav-color:#ffffff;
		`
	},
	getters: {

	},
	mutations: {
		// 皮肤更换
		skinPeeler(state,skin = []){
			// 将皮肤配置JSON转为以 ; 分割的字符串（style 值）
			let style = skin.map((item,index)=>{
				return `${item.name}:${item.value}`
			}).join(";");
			state.skin = style;
		}
	}
})

export default store
