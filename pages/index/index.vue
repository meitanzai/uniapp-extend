<template>
	<view>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="flex text-center">
				<view class="cu-item flex-sub" 
					v-for="(item,index) in linkList" 
					:key="index" 
					:class="index==TabCur?'text-green cur':''" 
					@tap="tabSelect" 
					:data-id="index"
					>
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="margin-top margin-bottom">
			<view v-for="(item,index) in linkList" :key="index" v-if="index == TabCur">
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
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
							}
							
						]
					},
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
						"name":"正在开发",
						"list":[
							{
								"name":"nvue 仿抖音视频轮播",
								"url":"/pages/template/swiper_video"
							}
						]
					},
					{
						"name":"暂停开发",
						"list":[
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
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			}
		}
	}
</script>

<style lang="scss">
	@import "/colorui/icon.css";
	@import "/colorui/main.css";
</style>
