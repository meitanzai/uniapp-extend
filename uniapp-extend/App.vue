<script>
	import helangSocket from 'lib/socket.js'
	export default {
		onLaunch: function() {
			// #ifdef H5
			console.group("作者信息：")
			console.log('昵称：河浪');
			console.log('ＱＱ：1846492969');
			console.log('uni-app插件主页：https://ext.dcloud.net.cn/publisher?id=110853')
			console.log(`———————————————————————————————————————————————————————————————————————————————————
浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪
浪浪浪　　浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪　　　浪浪浪浪浪浪浪浪
浪浪　　　　浪　　　　　　　　　　　　　　浪浪浪　　　浪浪浪浪浪浪　　　浪浪浪浪浪浪浪
浪浪浪浪　　　　　　　　　　　　　　　　　浪浪　　　　　浪　　　　　　　　　　　浪浪浪
浪浪浪浪　　　　浪浪浪浪浪浪浪浪　　　浪浪浪浪浪浪　　　　　　　　　　　　　　　浪浪浪
浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪　　　浪浪浪浪浪浪浪浪浪浪　　　浪浪浪浪浪　　　浪浪浪
浪浪　　浪浪浪浪　　　　　　　浪　　　浪浪浪浪浪浪浪浪浪浪　　　浪浪浪浪浪　　　浪浪浪
浪　　　　　浪浪　　　　　　　浪　　　浪浪浪　　　　浪浪浪　　　　　　　　　　　浪浪浪
浪浪浪　　　　浪　　　浪　　　浪　　　浪浪浪　　　　　　浪　　　浪浪浪浪浪　　　浪浪浪
浪浪浪浪　　浪浪　　　浪　　　浪　　　浪浪浪浪浪浪　　　浪　　　浪浪浪浪浪　　　浪浪浪
浪浪浪浪浪浪浪浪　　　浪　　　浪　　　浪浪浪浪浪浪浪浪浪浪　　　　　　　　　　　浪浪浪
浪浪浪浪浪　　浪　　　浪　　　浪　　　浪浪浪浪浪浪浪浪浪浪　　　　　　浪浪浪浪浪浪浪浪
浪浪浪浪　　　　　　　　　　　浪　　　浪浪浪浪浪浪　　　浪　　　浪　　　浪　　　浪浪浪
浪浪浪浪　　　浪　　　浪　　　浪　　　浪浪浪浪浪浪　　　浪　　　浪　　　　　　　　浪浪
浪浪浪　　　　浪　　　浪　　　浪　　　浪浪浪浪浪　　　浪浪　　　浪浪　　　　浪浪浪浪浪
浪浪浪　　　浪浪　　　浪浪浪浪浪　　　浪浪浪浪　　　　浪浪　　　　　　　　　浪浪浪浪浪
浪浪　　　　浪浪浪浪浪浪浪浪浪浪　　　浪浪浪浪　　　浪浪浪　　　　　　　　　　　浪浪浪
浪浪　　　浪浪浪浪浪浪浪浪浪　　　　　浪浪浪　　　　浪浪　　　　　浪浪浪浪　　　　　浪
浪浪浪　　浪浪浪浪浪浪浪浪浪　　　　浪浪浪浪浪浪　浪浪浪浪　　浪浪浪浪浪浪浪浪　　浪浪
浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪浪
———————————————————————————————————————————————————————————————————————————————————`)
			
			console.groupEnd();
			
			uni.getSystemInfo({
				success(e){
					// 是否为移动设备
					let isMobile = /iOS|Android/i.test(e.system);
					if(!isMobile){
						/* 窗口宽度大于768px且不在PC页面且不在移动设备时跳转至 PC.html 页面 */
						if(e.windowWidth > 768 && !window.top.isPC){
							let basic = '/uniapp-extend/static/html/pc.html';
							let src = basic + window.location.hash;
							window.location.replace(src);
						}
					}
				}
			});
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
