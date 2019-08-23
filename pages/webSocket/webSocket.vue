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
