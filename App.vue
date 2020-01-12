<script>
	import helangSocket from 'lib/socket.js'
	export default {
		onLaunch: function() {
			// #ifdef H5
			console.log("%c 河浪原创作品，QQ:1846492969",'color:#007aff;font-size:32px;');
			
			uni.getSystemInfo({
				success(e){
					if(e.windowWidth>375 && !window.top.isPC){
						window.location.pathname = '/uniapp-extend/static/html/pc.html';
					}
				}
			})
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
</style>
