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
								"name":"仿抖音轮播图",
								"url":"/pages/template/douyin_swiper"
							},
							{
								"name":"打地鼠游戏",
								"url":"/pages/template/whackMole"
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
