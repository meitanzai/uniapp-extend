<template>
	<view class="content">
		<view class="itme-box">
			<view class="title">分列式弹性盒子 - 等比分列</view>
			<view class="h-flex-x h-flex-3">
				<view class="red">等比分为3列</view>
				<view class="green">默认垂直居中</view>
				<view class="blue">h-flex-3</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分列式弹性盒子 - 水平居中对齐</view>
			<view class="h-flex-x h-flex-3 h-flex-center">
				<view class="red">水平居中对齐</view>
				<view class="green">h-flex-center</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分列式弹性盒子 - 水平右对齐</view>
			<view class="h-flex-x h-flex-3 h-flex-right">
				<view class="red">水平右对齐</view>
				<view class="green">h-flex-center</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分列式弹性盒子 - 两端对齐</view>
			<view class="h-flex-x h-flex-3 h-flex-space">
				<view class="red">两端对齐</view>
				<view class="green">h-flex-space</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分列式弹性盒子 - 弹性元素</view>
			<view class="h-flex-x h-flex-3">
				<view class="red h-flex-item-grow">弹性元素，占满容器剩余宽度</view>
				<view class="green">h-flex-item-grow</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分列式弹性盒子 - 垂直顶部对齐</view>
			<view class="h-flex-x h-flex-3 h-flex-top preview-box">
				<view class="red">垂直顶部对齐</view>
				<view class="green">h-flex-top</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分列式弹性盒子 - 垂直底部对齐</view>
			<view class="h-flex-x h-flex-3 h-flex-bottom preview-box">
				<view class="red">垂直顶部对齐</view>
				<view class="green">h-flex-bottom</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分列式弹性盒子 - 允许换行</view>
			<view class="h-flex-x h-flex-3 h-flex-wrap">
				<view class="red">允许换行</view>
				<view class="green">占位内容</view>
				<view class="blue">h-flex-wrap</view>
				<view class="yellow">占位内容</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分列式弹性盒子 - 水平居中对齐</view>
			<view class="h-flex-x h-flex-3 h-flex-center preview-box">
				<view class="red">水平垂直居中</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分行式弹性盒子 - 等比分行</view>
			<view class="h-flex-y h-flex-3 preview-box">
				<view class="red width-fill">等比分行</view>
				<view class="green width-fill">等比分为3行</view>
				<view class="blue width-fill">h-flex-3</view>
				<view class="yellow width-fill">默认水平左对齐</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分行式弹性盒子 - 弹性元素</view>
			<view class="h-flex-y h-flex-5 preview-box">
				<view class="red width-fill">被弹性元素挤压到顶部</view>
				<view class="green width-fill h-flex-item-grow">弹性元素，占满容器剩余高度</view>
				<view class="blue width-fill">h-flex-item-grow</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分行式弹性盒子 - 水平/垂直居中对齐</view>
			<view class="h-flex-y h-flex-5 preview-box h-flex-center">
				<view class="red">水平居中</view>
				<view class="green">因命名问题，默认垂直也会居中</view>
				<view class="yellow">h-flex-center</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分行式弹性盒子 - 水平右对齐</view>
			<view class="h-flex-y h-flex-5 h-flex-right preview-box">
				<view class="red">垂直居中</view>
				<view class="green">因命名问题，默认水平也会居中</view>
				<view class="yellow">h-flex-center</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分行式弹性盒子 - 水平右对齐</view>
			<view class="h-flex-y h-flex-5 h-flex-right preview-box">
				<view class="red">垂直居中</view>
				<view class="green">因命名问题，默认水平也会居中</view>
				<view class="yellow">h-flex-center</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分行式弹性盒子 - 垂直顶部对齐</view>
			<view class="h-flex-y h-flex-5 h-flex-top preview-box">
				<view class="red">垂直顶部对齐</view>
				<view class="yellow">h-flex-top</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">分行式弹性盒子 - 垂直底部对齐</view>
			<view class="h-flex-y h-flex-5 h-flex-bottom preview-box">
				<view class="red">垂直底部对齐</view>
				<view class="yellow">h-flex-bottom</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../../lib/helang-flex.scss";

	.content {
		background-color: #f3f3f3;
		padding: 20rpx;
		font-size: 28rpx;
		
		.red{
			background-color: #DD524D;
			color: #fff;
			text-align: center;
		}
		
		.green{
			background-color: #42b983;
			color: #fff;
			text-align: center;
		}
		
		.blue{
			background-color: #007AFF;
			color: #fff;
			text-align: center;
		}
		
		.yellow{
			background-color: #ffaa00;
			color: #fff;
			text-align: center;
		}
		

		.itme-box {
			padding: 20rpx;
			background-color: #fff;
			margin-bottom: 20rpx;
			line-height: 80rpx;

			.title {
				padding-bottom: 20rpx;
				margin-bottom: 20rpx;
				border-bottom: #e5e5e5 solid 1px;
				line-height: normal;
			}
			
			.width-fill{
				width: 100%;
			}
			
			.preview-box{
				height: 400rpx;
				box-shadow: 0 0 4px rgba(0,0,0,0.3);
			}
		}
	}
</style>
