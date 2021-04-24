<template>
	<view>
		<view class="panel">
			<view class="panel-head">获取数据：</view>
			<view class="panel-body">
				<button
					type="default" 
					style="width: 100%;"
					@tap="getListData"
				>获取数据渲染组件列表</button>
			</view>
		</view>
		
		<view>
			
		</view>
		<view class="panel" v-for="(item,index) in checkboxData" :key="index">
			<view class="panel-head">{{item.title}}：</view>
			<view class="panel-body">
				<helang-checkbox ref="checkbox" @change="onChange" :keyName="index"></helang-checkbox>
			</view>
		</view>
	</view>
</template>

<script>
	import helangCheckbox from "@/components/helang-checkbox/helang-checkbox.vue"
	export default {
		components: {
		    "helang-checkbox":helangCheckbox
		},
		data() {
			return {
				checkboxData:[]
			}
		},
		mounted(){
			
		},
		methods: {
			getListData(){
				new Promise((resolve, reject)=>{
					uni.showLoading({
						title:'加载中'
					})
					// 用延迟代替 请求，模拟异步获取数据的状态
					this.requestTimeout = setTimeout(()=>{
						let data = {
							status:1,
							data:[
								{
									title:'你的职业(单选)',
									data:{
										type:'radio',
										column:3,
										list:[
											{text:'java开发'},
											{text:'web前端'},
											{text:'摸鱼'}
										]
									}
								},
								{
									title:'你掌握的技术(多选)',
									data:{
										type:'checkbox',
										column:3,
										list:[
											{text:'uni-app'},
											{text:'Vue.js'},
											{text:'小程序'}
										]
									}
								}
							]
						}
						
						resolve(data);
					},1000);
				}).then((res)=>{
					uni.hideLoading();
					this.checkboxData = res.data;
					// DOM挂载后才能使用 ref 属性调用子组件方法
					// 在有些低端设备中，会存在 nextTick 已回调，但是DOM并未挂载的情况，可以通过 setTimeout 解决
					this.$nextTick(()=>{
						
						this.checkboxData.forEach((item,index)=>{
							// 给每一个 组件调用一次 set 方法
							this.$refs.checkbox[index].set(item.data);
						})
					})
				})
			},
			onChange(data,keyName){
				console.log(`数据值：`,data);
				console.log(`标识名：`,keyName);
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f2f2f2;
	}
	.panel{
		background-color: #fff;
		margin-bottom: 20rpx;
		padding: 20rpx 20rpx 0 20rpx;
		
		&-head{
			font-size: 28rpx;
		}
		&-body{
			margin-top: 20rpx;
			padding: 20rpx 0 0 0;
			border-top: #eee solid 1px;
			overflow: hidden;
			
			> button{
				display: block;
				float: left;
				margin: 0 20rpx 20rpx 0;
				border: #007aff solid 1px;
				padding: 0 20rpx;
				border-radius: 0;
				
				&:after{
					display: none;
				}
			}
		}
	}
</style>
