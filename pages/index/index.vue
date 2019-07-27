<template>
	<view class="container">
		<navigator v-for="(item,index) in linkList" :key="index" :url="item.url" hover-class="none">
			<button type="primary">{{item.txt}}</button>
        </navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				linkList:[
					{
						"txt":"猜成语",
						"url":"/pages/idiom/idiom"
					},
					{
						"txt":"颜色选择",
						"url":"/pages/pickerColor/pickerColor"
					},
					{
						"txt":"滑动验证",
						"url":"/pages/moveVerify/moveVerify"
					},
					{
						"txt":"图片列表模板",
						"url":"/pages/photoList/photoList"
					},
					{
						"txt":"全局方法",
						"url":"/pages/globalJs/globalJs"
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
		padding: 50upx;
		
		navigator{
			margin-bottom: 30upx;
		}
	}
</style>
