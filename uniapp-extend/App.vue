<script>
	import helangSocket from 'lib/socket.js'
	export default {
		onLaunch: function() {
			// #ifdef H5
			console.group("作者信息：")
			console.log('昵称：河浪');
			console.log('ＱＱ：1846492969');
			console.log('uni-app插件主页：https://ext.dcloud.net.cn/publisher?id=110853')
			console.groupEnd();
			// #endif
			
			// #ifndef H5
			console.log("河浪原创作品，QQ:1846492969");
			// #endif
			helangSocket.on();
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/*
	@import "./lib/global.scss";
	*/
   
	/* 条件编译，仅在H5平台生效 */
	// #ifdef H5
	body::-webkit-scrollbar,html::-webkit-scrollbar {
		display: none;
	}
	// #endif
</style>
