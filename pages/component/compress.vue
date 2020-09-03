<template>
	<view class="container">
		<button @tap="selectPhoto">选择照片</button>
		<helang-compress ref="helangCompress"></helang-compress>
		<image :src="compressPath" mode="widthFix"></image>
	</view>
</template>

<script>
	import helangCompress from '../../components/helang-compress/helang-compress';

	export default {
		components:{
			helangCompress
		},
		data() {
			return {
				compressPath:""
			}
		},
		methods: {
			selectPhoto(){
				uni.chooseImage({
				    count: 1,
				    sizeType: ['compressed'],
				    sourceType: ['album','camera'],
				    success: (res)=> {
						uni.showLoading({
							title:'压缩中',
							mask:true
						})
				        this.$refs.helangCompress.compress({
				        	src:res.tempFilePaths[0],
				        	maxSize:800,
							fileType:'jpg',
				        	quality:0.85
				        }).then((res)=>{
							setTimeout(()=>{
								uni.hideLoading();
								uni.showToast({
									icon:'success',
									title:'压缩成功'
								});
							},500);
				        	
				        	this.compressPath = res;
							console.log(res);
				        }).catch((err)=>{
							setTimeout(()=>{
								uni.hideLoading();
							},500);
							uni.showModal({
								title:'提示',
								content:err,
								showCancel:false,
								confirmText:'我知道了'
							});
						});
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
.container{
	padding: 30rpx;
	
	image{
		width: 100%;
		margin-top: 10px;
	}
}
</style>