<template>
	<view>
		<view class="preview" style="background-color: #608eec;">
			<helang-tab-bar-1 :fixed-bottom="false"></helang-tab-bar-1>
		</view>
		
		<view class="preview" style="background-color: #444;padding-top: 50px;">
			<helang-tab-bar-2 :fixed-bottom="false"></helang-tab-bar-2>
		</view>
	</view>
</template>

<script>
	import tabBar1 from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-1";
	import tabBar2 from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-2";
	
	export default {
		components: {
			"helang-tab-bar-1": tabBar1,
			"helang-tab-bar-2": tabBar2
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.preview{
	margin-bottom: 24px;
	padding: 32px 8px;
}
</style>
