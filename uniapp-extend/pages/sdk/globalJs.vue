<template>
	<view class="container">
		<view>
			<button type="default" @tap="showToast">显示提示框</button>
		</view>
		<view>
			<button type="default" @tap="showLoad">显示加载</button>
		</view>
		<view>
			<button type="default" @tap="isEmail">常用正则校验</button>
		</view>
		<view>
			<button type="default" @tap="getData" data-name="helang" data-age="24">获取自定义属性</button>
		</view>
		<view id="helang-el" @tap="getRect">
			<button type="default">获取尺寸和位置</button>
		</view>
		<view>
			<button type="default" @tap="request">发送请求</button>
		</view>
		<view>
			<button type="default" @tap="upload">上传文件</button>
		</view>
		<view>
			<button type="default" size="mini" @tap="aa1">设置</button>
			<button type="default" size="mini" @tap="aa2">获取</button>
			<button type="default" size="mini" @tap="aa3">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			console.log('统一资源标识符：')
			console.log(this.$iGlobal.URI);
		},
		methods: {
			showLoad(){
				/* 默认提示 “加载中” */
				this.$iGlobal.showLoading();
				
				setTimeout(function(){
					uni.hideLoading();
				},3000);
			},
			showToast(){
				/* 默认提示 无图标的信息 */
				this.$iGlobal.showToast("登录成功","success");
			},
			isEmail(){
				if(this.$iGlobal.regExps.email.test('1846492969@qq.com')){
					this.$iGlobal.showToast("这是一个合法的邮箱");
				}else{
					this.$iGlobal.showToast("这个邮箱不合法");
				}
			},
			getData(e){
				/* 默认获取元素上的所有自定义值 */
				let name=this.$iGlobal.getData(e,"name");
				this.$iGlobal.showToast(`name : ${name}`);
			},
			getRect(){
				this.$iGlobal.getRect('#helang-el').then((res)=>{
					this.$iGlobal.showToast("浏览器控制台查看结果");
					console.log(res);
				})
			},
			request(){
				this.$iGlobal.showLoading();
				this.$iGlobal.request({
					url:'https://api.apiopen.top/getWangYiNews',
					data:{
						page:1,
						count:10
					},
					method:'POST'
				}).then((res)=>{
					uni.hideLoading();
					this.$iGlobal.showToast("成功,看控制台","success");
					console.log(res);
				}).catch((err)=>{
					console.log("错误");
				});
			},
			upload(){
				this.$iGlobal.showToast("文件上传，可参照 请求 接口自行添加");
			},
			aa1(){
				this.$iGlobal.globalData.set("aa",131313);
			},
			aa2(){
				console.log(this.$iGlobal.globalData.get("aa"))
			},
			aa3(){
				this.$iGlobal.globalData.del("aa")
				console.log(this.$iGlobal.globalData.get("aa"))
			}
		}
	}
</script>

<style scoped lang="scss">
	.container{
		padding: 50upx;
		
		&>view{
			margin-bottom: 30upx;
		}
	}
</style>