<template>
	<view class="container flex_row" :style="windowHeight">
		<view class="flex_grow content-box" id="content-box">
			<view :style="{height:contentHeight}">
				<view class="top-nav">自定义导航栏</view>
				<view class="scroll-box">
					<scroll-view scroll-y="true" scrollHeight
						:style="{height:scrollHeight}"
						:refresher-enabled="true"
						refresher-background="#f3f3f3"
						refresher-default-style="black"
					>

						<view style="min-height: 400px;">
							<view style="padding: 20rpx;font-size: 16px;">
								<view>
									最初想通过 scroll-view组件 + 导航页多组件切换的方式来解决下拉/键盘/多页面切换的问题，但是
									scroll-view组件的下拉功能仅支持App平台与微信小程序平台且下拉体验贼差，故暂时放弃该解决方案，
									<text style="color: #ea0000;">本模版也暂时停止更新</text>
								</view>
							</view>
						</view>
						<input type="text" placeholder="键盘问题测试输入框" cursor-spacing="10" class="input-1">
						<view style="height: 300px;"></view>
					</scroll-view>
				</view>
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
				contentHeight:'0px',
				windowHeight:'',
				scrollHeight:'0px'
			}
		},
		mounted() {
			uni.getSystemInfo({
				success:(res)=> {
					this.windowHeight = `height:${res.windowHeight}px;`;
				}
			})
			this.$nextTick(()=>{
				let view = uni.createSelectorQuery().select('#content-box');
				view.boundingClientRect(data => {
					this.contentHeight = `${data.height}px`;
					
					this.$nextTick(()=>{
						let view = uni.createSelectorQuery().select('.scroll-box');
						view.boundingClientRect(data2 => {
							this.scrollHeight = `${data2.height}px`;
						}).exec();
					})
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
	
	&>view{
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;
		
		&>view{
			width: 100%;
		}
	}
	
	.scroll-box{
		flex-grow: 1;
		height: 0;
		overflow: hidden;
	}
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

.input-1{
	width: 750rpx;
	height: 100rpx;
	background-color: #fff;
	padding: 0 20rpx;
}
</style>
