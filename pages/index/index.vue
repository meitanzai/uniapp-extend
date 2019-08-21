<template>
	<view class="container">
		<uni-card  v-for="(item,index) in linkList" :key="index" :title="item.name">
			<view>
				<navigator v-for="(item2,index2) in item.list" :key="index2" :url="item2.url" hover-class="none">
                    <button type="default" size="mini">{{item2.name}}</button>
                </navigator>
			</view>
		</uni-card>
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
								"url":"/pages/moveVerify/moveVerify"
							},
							{
								"name":"颜色选择",
								"url":"/pages/pickerColor/pickerColor"
							},
							{
								"name":"异步switch",
								"url":"/pages/asyncSwitch/asyncSwitch"
							},
						]
					},
					{
						"name":"页面模板",
						"list":[
							{
								"name":"猜成语",
								"url":"/pages/idiom/idiom"
							},
							{
								"name":"图片列表模板",
								"url":"/pages/photoList/photoList"
							},
							{
								"name":"仿微信列表长按弹出菜单",
								"url":"/pages/weChat/weChat"
							},
							{
								"name":"商品双向联动列表",
								"url":"/pages/goodsList/goodsList"
							}
						]
					},
					{
						"name":"通用 SDK",
						"list":[
							{
								"name":"全局方法",
								"url":"/pages/globalJs/globalJs"
							},
							{
								"name":"webSocket",
								"url":"/pages/webSocket/webSocket"
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

<style lang="scss">
	.container{
		padding: 50upx 30upx;
		
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
