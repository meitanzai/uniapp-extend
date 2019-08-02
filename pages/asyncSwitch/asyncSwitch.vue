<template>
	<view>
		<view class="title">async-switch 组件示例</view>
		<view class="item">
			<view>默认选中：</view>
			<view>
				<async-switch :checked="checked1" @change="change1"></async-switch>
			</view>
		</view>
		<view class="item">
			<view>默认未选中：</view>
			<view>
				<async-switch :checked="checked2" @change="change2"></async-switch>
			</view>
		</view>
		<view class="item">
			<view>默认禁用：</view>
			<view>
				<async-switch :checked="checked3" :disabled="disabled3" @change="change3"></async-switch>
			</view>
			<view style="margin-left: 20upx;">
				<button :type="disabled3 ? 'primary':'warn'" size="mini" @tap="changeDisabled">{{disabled3 ? '取消禁用':'启用禁用'}}</button>
			</view>
		</view>
		<view class="copy">
			<view>本demo由 setTimeout 模拟异步过程</view>
			<view>uni-app 插件分享</view>
			<view>2019 helang.love@qq.com</view>
		</view>
	</view>
</template>

<script>
	import asyncSwitch from "@/components/helang-asyncSwitch/helang-asyncSwitch.vue"
	export default {
		components: {
		    "async-switch":asyncSwitch
		},
		data() {
			return {
				checked1:true,
				checked2:false,
				checked3:true,
				disabled3:true
			}
		},
		methods: {
			change1(){
				uni.showLoading({
					title:"正在请求",
					mask:true
				})
				setTimeout(()=>{
					uni.hideLoading();
					this.checked1=!this.checked1;
				},1000);
			},
			change2(){
				uni.showLoading({
					title:"正在请求",
					mask:true
				})
				setTimeout(()=>{
					uni.hideLoading();
					this.checked2=!this.checked2;
				},1000);
			},
			change3(){
				uni.showLoading({
					title:"正在请求",
					mask:true
				})
				setTimeout(()=>{
					uni.hideLoading();
					this.checked3=!this.checked3;
				},1000);
			},
			changeDisabled(){
				this.disabled3=!this.disabled3;
			}
		}
	}
</script>

<style scoped lang="scss">
.title{
	text-align: center;
	padding: 50upx 0;
	color: #333;
}
.copy{
	font-size:28upx;
	text-align: center;
	padding: 20upx;
	border:#ed4000 solid 1px;
	margin: 30upx 50upx 0 50upx;
	border-radius: 4px;
	color: #ed4000;
}
.item{
	padding: 50upx;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	font-size: 28upx;
	color: #333;
	
	&>view:first-child{
		width: 200upx;
	}
}
</style>
