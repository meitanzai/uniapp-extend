<template>
	<view>
		<view class="button" id="box">
			<button size="mini" type="warn" @tap="start">打开连接</button>
			<button size="mini" type="primary" @tap="send">发送当前时间</button>
			<button size="mini" type="default" @tap="off">关闭连接</button>
		</view>
		<view>
			<scroll-view  scroll-y="true" :style="{'height':scrollHeight}">
				<view class="item" v-for="(item,index) in msgList" :key="index">第{{index+1}}条消息：{{item}}</view>
            </scroll-view>
		</view>
	</view>
</template>

<script>
	import helangSocket from '../../lib/socket.js'
	export default {
		data() {
			return {
				msgList:[],
				scrollHeight:'500px',
				isData:false
			}
		},
		onLoad(){
			/* 添加服务器数据接收事件 */
			helangSocket.data((res)=>{
				//console.log(`index.vue页面接收到的服务器数据:${res}`);
				this.msgList.push(res);
			});
		},
		mounted(){
			this.$nextTick(()=>{
				new Promise((resolve,reject)=>{
					uni.getSystemInfo({
						success:(res)=>{
							resolve(res);
						}
					})
				}).then((res)=>{
					let view = uni.createSelectorQuery().select("#box");
					view.fields({
					  size: true
					}, (data) => {
						this.scrollHeight=`${res.windowHeight-data.height}px`;
					}).exec();
				})
				
				
				// #ifdef H5
				if(!/https/.test(window.location.protocol)){
					return;
				}
				uni.showModal({
					title:"河浪提醒",
					content:'因测试接口是ws的原因，请切换地址是http的地址查看功能演示',
					showCancel:false,
					confirmText:'立即切换',
					success:()=>{
						let url = window.location.href;
						url = url.replace("https:","http:");
						window.open(url);
					}
				});
				// #endif
			});
		},
		methods: {
			start(){
				helangSocket.start();
			},
			send(){
				helangSocket.send(`当前时间是${new Date().getTime()}`);
			},
			off(){
				helangSocket.off();
			}
		}
	}
</script>

<style lang="scss">
.button{
	padding: 20upx;
	
	button{
		margin: 0 10upx;
	}
}
.item{
	padding: 20upx;
}
</style>
