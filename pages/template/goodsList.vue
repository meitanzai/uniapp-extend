<template>
	<view>
		<view class="t1">点击下方链接体验</view>
		<navigator url="goodsList_swiper" hover-class="hover">
			<view class="title">
				<text>轮播式联动</text>
				<text class="link">立即体验</text>
			</view>
			<view class="content">
				<view>
					优点：左侧导航与主内容区域联动性好
				</view>
				<view>
					缺点：因H5平台浏览器众多，体验欠佳，不建议在H5平台使用
				</view>
			</view>
		</navigator>
		<navigator url="goodsList_scroll" hover-class="hover">
			<view class="title">
				<text>滚动式联动</text>
				<text class="link">立即体验</text></view>
			<view class="content">
				<view>
					优点：滚动流畅度很好，全平台兼容
				</view>
				<view>
					缺点：因主内容区数据量的问题，导致内容高度达不到置顶条件，则会导致最后一栏滚动无法定位问题。
				</view>
			</view>
		</navigator>
		<view class="t2">
			<view>因数据不可控的原因，请各位开发者们选择适合自己的模板使用，各有优缺点，选择适合自己的才是最好的。</view>
			<view>如果每一项的数据量足够多，推荐使用【滚动式联动】，流畅性会好很多。</view>
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
.t1{
	padding-top: 30rpx;
	text-align: center;
	font-size: 36rpx;
	color: #e50000;
}
.t2{
	padding: 30rpx;
	font-size: 24rpx;
	color: #ee0000;
	
	>view{
		margin-bottom: 10rpx;
	}
}
navigator{
	font-size: 28rpx;
	margin: 30rpx;
	padding: 20rpx;
	background-color: #fff;
	border:#e5e5e5 solid 1px;
	
	.title{
		padding-bottom: 20rpx;
		margin-bottom: 20rpx;
		border-bottom:#e5e5e5 solid 1px;
		color:#333;
		font-size: 32rpx;
		
		.link{
			color: #09f;
			float: right;
		}
	}
	
	.content{
		line-height: 48rpx;
		color:#999;
	}
}
</style>
