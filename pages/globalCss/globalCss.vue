<template>
	<view>
		<view class="itme-box">
			<view class="title">项目全局样式表 - 布局演示</view>
			<view class="demo-2">
				<view class="flex_col color_fff">
					<image src="../../static/logo.png" mode="aspectFill" class="pic"></image>
					<view class="flex_grow">
						<view class="size_16" style="padding-bottom: 10rpx;">河浪（uni-app）</view>
						<view class="size_12">一个热爱分享又普通的web前端开发者</view>
					</view>
					<view class="edit size_12">编辑</view>
				</view>
			</view>
			<view class="demo-3 flex_col flex_col_3 color_999 align_c size_12">
				<view>
					<view>
						<text class="color_d51 font_b size_14">1024</text>
						<text style="padding-left: 6rpx;">元</text>
					</view>
					<view>可提金额</view>
				</view>
				<view>
					<view>
						<text class="color_d51 font_b size_14">1102</text>
						<text style="padding-left: 6rpx;">元</text>
					</view>
					<view>即将到账</view>
				</view>
				<view>
					<view>
						<text class="color_d51 font_b size_14">1988</text>
						<text style="padding-left: 6rpx;">元</text>
					</view>
					<view>累计收益</view>
				</view>
			</view>
		</view>
		<view class="itme-box">
			<view class="title">弹性分列式布局 - 等比分列</view>
			<view class="flex_col flex_col_3 align_c demo-1 color_fff">
				<view>等比分为3列</view>
				<view>默认垂直居中</view>
				<view>flex_col_3</view>
			</view>
		</view>
		<view class="itme-box">
			<view class="title">弹性分列式布局 - 水平居中</view>
			<view class="flex_col flex_center flex_col_3 align_c demo-1 color_fff">
				<view>我被水平居中了</view>
				<view>flex_center</view>
			</view>
		</view>
		<view class="itme-box">
			<view class="title">弹性分列式布局 - 两端对齐</view>
			<view class="flex_col flex_space flex_col_3 align_c demo-1 color_fff">
				<view>我们被分开了</view>
				<view>flex_space</view>
			</view>
		</view>
		<view class="itme-box">
			<view class="title">弹性分列式布局 - 弹性设置</view>
			<view class="flex_col flex_center flex_col_3 align_c demo-1 color_fff">
				<view>右边的是弹性的</view>
				<view class="flex_grow">flex_grow</view>
			</view>
		</view>
		<view class="itme-box">
			<view class="title">弹性分列式布局 - 允许换行</view>
			<view class="flex_col flex_wrap flex_col_2 align_c demo-1 color_fff" style="height: 220rpx;">
				<view>请求换行</view>
				<view>默认垂直居中</view>
				<view>flex_wrap</view>
			</view>
		</view>
		<view class="itme-box">
			<view class="title">弹性分行式布局 - 自动适应容器高度</view>
			<view class="flex_row flex_wrap flex_col_2 align_c demo-1 color_fff" style="height: 600rpx;padding: 20rpx;">
				<view style="width: 100%;">我被下面的弹性元素自动顶到了上方</view>
				<view class="flex_grow flex_col flex_center flex_wrap" style="width: 100%;">
					<view>我是分行式布局中的弹性元素</view>
					<view>我会占满容器高度所有剩余的空间</view>
				</view>
				<view style="width: 100%;">flex_row</view>
			</view>
		</view>
		<view class="itme-box">
			<view class="title">样式表内容清单：</view>
			<view class="label-box flex_col flex_wrap size_12 color_666">
				<view>根元素样式</view>
				<view>常用元素尺寸规则</view>
				<view>弹性盒子</view>
				<view>字体颜色</view>
				<view>字体大小</view>
				<view>对齐方式</view>
				<view>弹窗</view>
			</view>
			<view class="size_12 color_999 copy">
				<view>更多使用，请查看 global.scss 文件。源码有详细注释</view>
				<view>2019 helang.love@qq.com</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import "../../lib/global.scss";
	
	.itme-box{
		padding: 20rpx;
		background-color: #fff;
		margin-bottom: 20rpx;
		line-height: 80rpx;
		
		.title{
			padding-bottom: 20rpx;
			margin-bottom: 20rpx;
			border-bottom: #e5e5e5 solid 1px;
			line-height: normal;
		}
	}
	
	.demo-1{
		height: 140rpx;
		border: #f00 solid 1px;
		padding: 0 20rpx;
		
		&>view:nth-child(1){
			background-color: #42b983;
		}
		&>view:nth-child(2){
			background-color: #007AFF;
		}
		&>view:last-child{
			background-color: #DD524D;
		}
	}
	.demo-2{
		background-color: #fd673d;
		background-image: linear-gradient(to right,#fd673d,#ff1e0f);
		padding: 50rpx 20rpx 100rpx 20rpx;
		line-height: normal;
		
		.pic{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			border: rgba(255,255,255,0.5) solid 10rpx;
			margin-right: 20rpx;
		}
		.edit{
			padding-right: 20rpx;
			position: relative;
			line-height: 40rpx;
			height: 40rpx;
			
			&:after{
				content: "";
				display: block;
				height: 12rpx;
				width: 12rpx;
				border-width: 2px 2px 0 0;
				border-color: #fff;
				border-style: solid;
				transform:rotate(45deg);
				position: absolute;
				top: 14rpx;
				right: 0;
			}
		}
	}
	.demo-3{
		height: 120rpx;
		background-color: #fff;
		position: relative;
		border-radius: 4px;
		margin: -60rpx 30rpx 0 30rpx;
		box-shadow: 0 0 5px #ccc;
		line-height: normal;
	}
	.label-box{
		line-height: normal;
		&>view{
			border: #e5e5e5 solid 1px;
			padding: 4rpx 10rpx;
			margin: 0 10rpx 10rpx 0;
			border-radius: 3px;
		}
	}
	.copy{
		padding-top: 20rpx;
		margin-top: 20rpx;
		border-top: #e5e5e5 solid 1px;
		line-height: normal;
	}
</style>