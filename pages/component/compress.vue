<template>
	<view class="container">
		<helang-compress ref="helangCompress"></helang-compress>
		<button @tap="selectPhoto" type="primary">选择照片</button>
		<view style="padding: 20rpx 0;" v-if="paths.length>0">
			<button @tap="compress" size="mini" type="warn" style="margin-right: 10px;">单张压缩</button>
			<button @tap="batchCompress" type="warn" size="mini">批量压缩</button>
		</view>
		
		<view class="img-list">
			<image v-for="(item,index) in compressPaths" :key="index" :src="item" mode="aspectFit"></image>
		</view>
		
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
				compressPaths:[],
				paths:[]
			}
		},
		methods: {
			// 选择照片
			selectPhoto(){
				uni.chooseImage({
				    count: 9,
				    sizeType: ['compressed'],
				    sourceType: ['album','camera'],
				    success: (res)=> {
						this.paths = res.tempFilePaths;
				    }
				});
			},
			// 单张压缩
			compress(){				
				uni.showLoading({
					title:'压缩中',
					mask:true
				});
				
				this.$refs.helangCompress.compress({
					src:this.paths[0],
					maxSize:800,
					fileType:'jpg',
					quality:0.85,
					minSize:640	//最小压缩尺寸，图片尺寸小于该时值不压缩，非H5平台有效
				}).then((res)=>{
					uni.hideLoading();
					uni.showToast({
						title:"压缩成功",
						icon:"success"
					})
					this.compressPaths = [res];
				}).catch((err)=>{
					uni.hideLoading();
					uni.showToast({
						title:"压缩失败",
						icon:"none"
					})
				})
			},
			// 批量压缩
			batchCompress(){
				this.$refs.helangCompress.batchCompress({
					batchSrc:this.paths,
					maxSize:800,
					fileType:'jpg',
					quality:0.85,
					minSize:640,	//最小压缩尺寸，图片尺寸小于该时值不压缩，非H5平台有效
					progress:(res)=>{
						uni.showLoading({
							title:`进度:${res.done+res.fail}/${res.count}`
						})
						console.log(res);
					}
				}).then((res)=>{
					uni.hideLoading();
					uni.showToast({
						title:"压缩完成",
						icon:"success"
					})
					this.compressPaths = res;
				}).catch((err)=>{
					uni.hideLoading();
					uni.showToast({
						title:"压缩失败",
						icon:"none"
					})
				})
			}
		}
	}
</script>

<style lang="scss">
.container{
	button{
		&::after{
			display: none;
		}
	}
	
	padding: 30rpx;
	
	.img-list{
		> image{
			width: 200rpx;
			height: 200rpx;
			margin: 10px 10px 0 0;
			border: #d7d7d7 solid 1px;
		}
	}
}
</style>