<template>
	<view class="helang-tab-bar">
		<view class="placeholder" v-if="fixedBottom"></view>
		<view class="bar" :class="{'fixed':fixedBottom}">
			<view class="circle" :class="`circle-${current}`">
				<view class="left"></view>
				<view class="right"></view>
			</view>
			<view class="h-flex-x h-flex-4">
				<view class="item h-flex-x h-flex-center"
					v-for="(item,index) in  tabList" 
					:key="index" 
					:class="{
						'active':current == index
					}"
					@tap="change(index)"
				>
					<view>
						<view class="h-flex-x h-flex-center">
							<view class="icon h-flex-x h-flex-center">
								<uni-icons :type="item.icon" size="48rpx" color="#262626"></uni-icons>
							</view>
						</view>
						<view class="h-flex-x h-flex-center text">
							{{item.text}}
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/uni_modules/helang-tabBar/components/uni-icons/uni-icons";
	
	export default {
		// 滑动
		name:"helangTabBarSlide",
		components: {
			uniIcons
		},
		props:{
			// 固定底部
			fixedBottom:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				prevIndex:-1,
				current:0,
				tabList:[
					{
						"icon":"home-filled",
						"text":"首页"
					},
					{
						"icon":"chat-filled",
						"text":"消息"
					},
					{
						"icon":"gift-filled",
						"text":"福利"
					},
					{
						"icon":"person-filled",
						"text":"我的"
					},
				]
			};
		},
		computed:{
			
		},
		methods:{
			change(index){
				if(this.current == index)return;
				this.prevIndex = this.current;
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "./helang-flex.scss";
@import "./tab-bar.scss";

.helang-tab-bar{
	.bar{
		border-radius: 6px 6px 0 0;
		
		
		> .h-flex-x{
			position: absolute;
			z-index: 2;
			width: 100%;
			height: auto;
		}
	}
	
	.circle{
		border: #212426 solid 8rpx;
		border-radius: 50%;
		width: 80rpx;
		height: 80rpx;
		background-color: #13e14c;
		position: absolute;
		z-index: 1;
		top: -40rpx;
		left: 0;
		margin-left: calc(12.5% - 40rpx);
		transition:left 0.2s ease 0s;
		
		/* 定位对齐 */
		@for $i from 0 to 4{
		    &.circle-#{$i} {
				left: $i / 4 * 100%;
		    }
		}
		
		> view{
			display: block;
			top: 32rpx;
			width: 20rpx;
			height: 20rpx;
			background-color: #212426;
			position: absolute;
			
			&::before{
				content: '';
				display: block;
				width: 30rpx;
				height: 30rpx;
				background-color: #fff;
				position: absolute;
				top: 0;
			}
		}
		
		.right{
			right: -22rpx;
			
			&::before{
				border-radius: 12px 0 0 0;
				left: 0;
			}
		}
		
		.left{
			left: -22rpx;
			
			&::before{
				border-radius: 0 12px 0 0;
				right: 0;
			}
		}
	}
	
	.item{
		height: 100rpx;
		position: relative;
		color: #bebcbc;
		font-size: 20rpx;
		line-height: normal;
		
		.icon{
			position: relative;
			width: 60rpx;
			height: 60rpx;
			margin: 0 auto;
			// 字体图标库有问题，需要添加偏移矫正对齐
			// margin-left: 14rpx;
			
			transition:transform 0.2s ease 0s;
		}
		
		.text{
			position: absolute;
			left: 0;
			width: 100%;
			top: 46rpx;
			transition:opacity 0.2s ease 0s;
			opacity: 0;
			font-size: 28rpx;
		}
		
		
		&.active{
			color: #262626;
			
			.icon{
				transform: translateY(-50rpx);
			}
			
			.text{
				opacity: 1;
			}
		}
	}
}
</style>
