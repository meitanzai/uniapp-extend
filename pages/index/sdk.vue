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
						"name":"通用 SDK",
						"list":[
							{
								"name":"flex布局CSS库",
								"url":"/pages/sdk/flex"
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
