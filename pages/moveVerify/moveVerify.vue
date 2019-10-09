<template>
	<view>		
		<view style="padding: 30px 15px;">
			<move-verify @result='verifyResult'></move-verify>
			<view class="result" :class="{ 'is':resultData.flag }">
				<text>校验结果：</text>
				<text style="font-weight: bold;">{{resultData.flag ? '已' : '未'}}通过</text>
				<text>，拖动次数：</text>
				<text style="font-weight: bold;">{{resultData.count || 0}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import moveVerify from "@/components/helang-moveVerify/helang-moveVerify.vue"
	export default {
		components: {
			"move-verify":moveVerify
		},
		data() {
			return {
				resultData:{}
			}
		},
		methods: {
			/* 校验成功的回调函数 */
			verifyResult(res){
				console.log(res);
				this.resultData = res;
			}
		}
	}
</script>
	
<style lang="scss">
	.result{
		border: #e64340 solid 1px;
		margin: 50rpx 0 0 0;
		padding: 30rpx;
		font-size: 36rpx;
		color: #e64340;
		
		&.is{
			border: #7ac23c solid 1px;
			color: #7ac23c;
		}
	}
</style>
