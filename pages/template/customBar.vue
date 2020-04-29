<template>
	<view class="container flex_row" :style="WH">
		<view class="flex_grow content-box" id="content-box">
			<view :style="{ height:H }">
				<view class="top-nav">自定义导航栏</view>
				
				
				<view style="height: 100px;"></view>
				<input type="text" placeholder="请输入内容" cursor-spacing="10" class="aaa">
				
				<view style="height: 300px;"></view>
				<input type="text" placeholder="请输入内容" cursor-spacing="10" class="aaa">
			</view>
		</view>
		<view>
			<view class="tab-bar flex_col flex_col_5 align_c">
				<view class="tab">
					<uni-icons type="home-filled" size="24" color="#666666"></uni-icons>
					<view>首页</view>
				</view>
				<view class="tab">
					<uni-icons type="chatboxes-filled" size="24" color="#666666"></uni-icons>
					<view>消息</view>
				</view>
				<view>
					<view class="protrude">
						<uni-icons type="scan" size="30" color="#ffffff"></uni-icons>
					</view>
					<view class="bbb"></view>
				</view>
				<view class="tab">
					<uni-icons type="pengyouquan" size="24" color="#666666"></uni-icons>
					<view>动态</view>
				</view>
				<view class="tab">
					<uni-icons type="person-filled" size="24" color="#666666"></uni-icons>
					<view>我的</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	
	export default {
		components: {uniIcons},
		data() {
			return {
				H:'0px',
				WH:''
			}
		},
		mounted() {
			uni.getSystemInfo({
				success:(res)=> {
					this.WH = `height:${res.windowHeight}px;`;
				}
			})
			this.$nextTick(()=>{
				let view = uni.createSelectorQuery().select('#content-box');
				view.boundingClientRect(data => {
					this.H = `${data.height}px`;
				}).exec();
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
@import "../../lib/global.scss";

page,.container{
	height: 100%;
}

.container>view{
	width: 100%;
}

.content-box{
	height: 0;
	overflow: hidden;
}

.tab-bar{
	box-sizing: content-box;
	height: 50px;
	background-color: #FFFFFF;
	border-top: #D9D9D9 solid 1px;
	
	&>view{
		height: 100%;
		position: relative;
		
		&.tab{
			padding-top: 5px;
			color: #666;
			
			&>view{
				line-height: 12px;
				font-size: 11px;
			}
		}
		
		&.tab:active{
			background-color: #f6f6f6;
		}
	}
	
	.protrude{
		height: 60px;
		width:  60px;
		position: absolute;
		z-index: 10;
		border-radius: 50%;
		left: 50%;
		margin-left: -25px;
		background-image: linear-gradient(-30deg, #0081ff, #42b983);
		bottom: 5px;
		color: #fff;
		font-size: 18px;
		border: #fff solid 5px;
		line-height: 50px;
		
		transform:scale(1,1);
		
		&:active{
			transform:scale(0.95,0.95);
		}
	}
}

.aaa{
	width: 750rpx;
	height: 100rpx;
	background-color: #fff;
	padding: 0 20rpx;
}



.top-nav{
	padding-top: var(--status-bar-height);
	height: 44px;
	box-sizing: content-box;
	background-image: linear-gradient(45deg, #0081ff, #42b983);
	color: #fff;
	font-size: 17px;
	text-align: center;
	line-height: 43px;
}
</style>
