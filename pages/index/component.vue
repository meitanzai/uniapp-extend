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
							},
							{
								"name":"高斯模糊",
								"url":"/pages/component/blur"
							},
							{
								"name":"图片压缩",
								"url":"/pages/component/compress"
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
