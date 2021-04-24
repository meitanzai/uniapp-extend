<template>
	<view>
		<view class="t1">给自己的家乡投票</view>
		<view style="height: 108rpx;"></view>
		
		<view class="vote-list">
			<view 
				v-for="(item,index) in list" :key="index" 
				@tap="onVote" :data-index="index"
				:class="{ 'active':index == voteIndex }"
			>
				<view>{{item.name}}</view>
				<view class="path" :style="{ 'width':item.count+'%' }">
					<view v-show="isVote"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				isVote:false,
				voteIndex:-1
			}
		},
		onLoad() {
			this.initList();
			console.log(this.list)
		},
		methods: {
			/* 初始化数据 */
			initList(){
				let provinceData = [
					"北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省",
					"黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省",
					"河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省",
					"贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区",
					"新疆维吾尔自治区","台湾","香港","澳门",
					];
				
				let area = provinceData.map((item,index)=>{
					let count = Math.floor(Math.random()*100);
					return {
						"name":item,
						count
					}
				});
				
				this.list = area;	
			},
			onVote(e){
				if(this.isVote){
					return;
				}
				let {index} = e.currentTarget.dataset;
				let count = this.list[index].count + 1;
				this.$set(this.list[index],"count",count);
				this.isVote = true;
				this.voteIndex = index;
				console.log(index);
			}
		}
	}
</script>

<style lang="scss">
.t1{
	box-sizing: border-box;
	line-height: 88rpx;
	padding: 0 30rpx;
	position: fixed;
	width: 100%;
	left: 0;
	top: var(--window-top);
	font-size: 28rpx;
	border-bottom: #f1f1f1 solid 1px;
	background-color: #fff;
	z-index: 5;
}

.vote-list{
	font-size: 28rpx;
	padding: 0 30rpx;
	
	> view{
		box-sizing: border-box;
		height: 90rpx;
		margin-bottom: 20rpx;
		line-height: 86rpx;
		padding: 0 20rpx;
		position: relative;
		background-color: #f6f6f6;
		color: 333;
		
		&:active{
			background-color: #f1f1f1;
		}
		
		&.active{
			color: #42b983;
			background-color: #f5fff9;
		}
		
		.path{
			position: absolute;
			height: 2px;
			bottom: 0;
			left: 0;
			overflow: hidden;
			
			> view {
				height: 100%;
				width: 100%;
				background-color: #42b983;
				
				animation:run 0.5s ease-in-out 0s 1 normal;
			}
		}
	}
}

@keyframes run{
	from {width:0%;}
	to {width:100%;}
}
</style>
