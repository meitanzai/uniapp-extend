<template>
	<view>
		<!-- 顶部导航栏 -->
		<view class="top-nav" :class="topNavStyle.class" :style="topNavStyle.style">
			<view>顶部导航栏</view>
		</view>
		
		<view class="box-1">
			<image src="/static/images/douyin/0.jpg" mode="aspectFill"></image>
			<view>滚动页面 - 查看导航栏渐变效果</view>
		</view>
		<view style="height: 1000px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				topNavIndex:0,
				pageScrollTop:0,	// 页面滚动距离
			}
		},
		computed:{
			topNavStyle(){
				let r = this.pageScrollTop  / 110;	// 当滚动距离 >= 110 时不透明
				return {
					"class":r>=0.75?'active':'',
					"style":`background-color: rgba(66,185,131,${r>=1?1:r});`
				}
			}
		},
		onPageScroll(e){
			this.pageScrollTop = Math.floor(e.scrollTop);
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	/* 标题栏 */
	.top-nav{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		padding-top: var(--status-bar-height);
		z-index: 10;
		background-color: rgba(66,185,131,0);

		&>view{
			height: 44px;	/* 框架自带导航高度为44px */
			line-height: 43px;
			font-size: 16px;
			text-align: center;
			color: #333;
			transition: color 0.5s ease-in-out 0s;
		}
		
		&.active{
			background-color: rgba(255,255,255,1);
			&>view{
				color: #fff;
			}
		}
	}
	/* 顶部导航栏占位元素 */
	.top-nav-placeholder{
		padding-top: var(--status-bar-height);
		height: 44px;
		box-sizing: content-box;
		width: 750rpx;
	}


	.box-1{
		position: relative;
		
		&>image{
			width: 100%;
			height: 1200rpx;
		}
		
		&>view{
			font-size: 14px;
			position: absolute;
			top: 200px;
			width: 550rpx;
			left: 100rpx;
			text-align: center;
			background-color: rgba(0,0,0,0.5);
			color: #fff;
			line-height: 100px;
			border-radius: 4px;
			box-shadow: 0 0 5px #fff;
		}
	}
</style>
