<template>
	<view class="helang-picker-utils">
		河浪 从底部弹起的滚动选择器 工具箱
	</view>
</template>

<script>
	export default {
		name:"helang-picker-utils",
		props:{
			params:{
				type: Object,
				default(){
					return {}
				}
			},
			tag:{
				type:String | Number,
				default:''
			},
			index:{
				type:Number,
				default:-1
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>

</style>
