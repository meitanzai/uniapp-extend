<template>
	<view>		
		<view style="padding: 30px 15px;">
			<move-verify @result='verifyResult'></move-verify>
			<button :style="{'backgroundColor':(isFlag ? '#7ac23c' : '#e64340')}">校验结果：{{isFlag ? '已' : '未'}}通过</button>
			<view class="copy">
				<view>uni-app插件，拖动滑块校验插件</view>
				<view>helang.love@qq.com</view>
				<view decode="true">&copy; 2019 河浪原创</view>
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
				isFlag:false
			}
		},
		methods: {
			/* 校验成功的回调函数 */
			verifyResult(){
				this.isFlag=true;
			}
		}
	}
</script>
	
<style>
	button{
		margin: 50upx;
		color:#fff;
	}
	button:after{
		display: none;
	}
	.copy{
		text-align: center;
		font-size: 28upx;
		color: #999;
		line-height: 48upx;
	}
</style>
