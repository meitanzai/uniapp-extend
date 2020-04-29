<template>
	<view class="container">
		<view v-for="(item,index) in linkList" :key="index" style="margin-bottom: 15px;">
			<uni-card :title="item.name">
				<view>
					<navigator v-for="(item2,index2) in item.list" :key="index2" :url="item2.url" hover-class="none">
			            <button type="default" size="mini">{{item2.name}}</button>
			        </navigator>
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card"

	export default {
		components: {uniCard},
		data() {
			return {
				linkList:[
					{
						"name":"通用组件",
						"list":[
							{
								"name":"滑动验证",
								"url":"/pages/component/moveVerify"
							},
							{
								"name":"颜色选择",
								"url":"/pages/component/pickerColor"
							},
							{
								"name":"异步switch",
								"url":"/pages/component/asyncSwitch"
							},
							{
								"name":"自定义复选/单选框",
								"url":"/pages/component/checkbox"
							},
							{
								"name":"指定内容高亮",
								"url":"/pages/component/highlight"
							},
							{
								"name":"卡片式轮播图",
								"url":"/pages/template/gradientNav"
							}
						]
					},
					{
						"name":"页面模板",
						"list":[
							{
								"name":"看图猜成语游戏",
								"url":"/pages/template/idiom"
							},
							{
								"name":"有入场动画的图片列表",
								"url":"/pages/template/photoList"
							},
							{
								"name":"仿微信列表长按弹出菜单",
								"url":"/pages/template/weChat"
							},
							{
								"name":"商品双向联动列表",
								"url":"/pages/template/goodsList"
							},
							{
								"name":"仿抖音图片轮播",
								"url":"/pages/template/swiper_image"
							},
							{
								"name":"打地鼠游戏",
								"url":"/pages/template/whackMole"
							},
							{
								"name":"即时通讯聊天",
								"url":"/pages/template/talk"
							},
							{
								"name":"滚动渐变的顶部导航栏",
								"url":"/pages/template/gradientNav"
							}
							
						]
					},
					{
						"name":"通用 SDK",
						"list":[
							{
								"name":"项目全局样式表",
								"url":"/pages/sdk/globalCss"
							},
							{
								"name":"项目全局通用方法",
								"url":"/pages/sdk/globalJs"
							},
							{
								"name":"webSocket",
								"url":"/pages/sdk/webSocket"
							}
						]
					},
					{
						"name":"正在开发中的",
						"list":[
							{
								"name":"nvue 仿抖音视频轮播",
								"url":"/pages/template/swiper_video"
							},
							{
								"name":"flex布局盒子",
								"url":"/pages/component/flex"
							},
							{
								"name":"自定义导航栏解决方案",
								"url":"/pages/template/customBar"
							}
						]
					}
				]
			}
		},
		methods: {
			
		},
		onLoad(){
			
		}
	}
</script>

<style scoped lang="scss">
	.container{
		padding: 32upx 0 0 0;
		
		navigator{
			display: inline-block;
			margin: 0 20upx 20upx 0;
			
			button{
				display: block;
			}
		}
		
		.uni-card{
			margin-bottom: 30upx;
		}
	}
</style>
