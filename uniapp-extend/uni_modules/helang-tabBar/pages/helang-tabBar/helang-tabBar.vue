<template>
	<view>
		<view class="preview" style="background-color: #608eec;">
			<helang-tab-bar-1></helang-tab-bar-1>
		</view>
	</view>
</template>

<script>
	import tabBar1 from "@/uni_modules/helang-tabBar/components/helang-tabBar/tab-bar-1";
	
	export default {
		components: {
			"helang-tab-bar-1": tabBar1
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
	margin-bottom: 16px;
	padding: 32px 8px;
}
</style>
