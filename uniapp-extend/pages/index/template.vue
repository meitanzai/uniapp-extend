<template>
	<view>		
		<view v-for="(item,index) in linkList" :key="index">
			<view class="cu-bar bg-white solid-bottom solid-top">
				<view class="action">
					<text class="cuIcon-title text-green"></text>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="cu-list menu">
				<navigator class="cu-item arrow" 
					v-for="(item2,index2) in item.list" 
					:key="index2" 
					:url="item2.url" 
					>
					<view class="content">
						<text class="text-grey">{{item2.name}}</text>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				linkList:[
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
							},
							{
								"name":"表格",
								"url":"/pages/template/table"
							},
							{
								"name":"应用换肤",
								"url":"/pages/template/skin-peeler"
							},
							{
								"name":"答题模板(仿驾考宝典)",
								"url":"/pages/template/optimized-swiper"
							}
						]
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	@import "@/lib/global.scss";
	@import "/colorui/icon.css";
	@import "/colorui/main.css";
</style>
