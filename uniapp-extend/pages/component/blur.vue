<template>
	<view>
		<view style="padding: 10px 20px;">演示：</view>
		<view class="demo" :class="{ 'bg':!isUse }">
			<helang-blur :params="params"></helang-blur>
		</view>
		<view style="padding: 10px 20px;margin-top: 10px;border-top: #ddd solid 1px;">操作：</view>
		<view>
			<view class="item">
				<view>宽度</view>
				<slider min="100" max="300" value="300" :show-value="true" @change="widthChange" step="10" />
			</view>
			<view class="item">
				<view>高度</view>
				<slider min="100" max="300" value="200" :show-value="true" @change="heightChange" step="10" />
			</view>
			<view class="item">
				<view>模糊程度</view>
				<radio-group @change="radioChange">
					<label>
						<radio value="xs" />
						<text>极轻</text>
					</label>
					<label>
						<radio value="s" />
						<text>轻微</text>
					</label>
					<label>
						<radio value="m" checked />
						<text>适当</text>
					</label>
					<label>
						<radio value="l" />
						<text>严重</text>
					</label>
					<label>
						<radio value="xl" />
						<text>超严重</text>
					</label>
				</radio-group>
			</view>
			<view class="item">
				<view>使用图片</view>
				<switch checked @change="useImage" />
			</view>
		</view>
	</view>
</template>

<script>
	import helangBlur from "@/components/helang-blur/helang-blur.vue"
	export default {
		components:{
			helangBlur
		},
		data() {
			return {
				params:{
					width:'300px',
					height:'200px',
					image:"https://mydarling.gitee.io/uniapp-extend/static/images/douyin/4.jpg",
					blur:"m"
				},
				isUse:true
			}
		},
		methods: {
			widthChange(e){
				this.params.width = `${e.detail.value}px`;
			},
			heightChange(e){
				this.params.height = `${e.detail.value}px`;
			},
			useImage(e){
				let url = 'https://mydarling.gitee.io/uniapp-extend/static/images/douyin/4.jpg';
				this.params.image = e.detail.value ? url : '';
				this.isUse = e.detail.value;
			},
			radioChange(e){
				this.params.blur = e.detail.value;
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #fff;
	font-size: 36rpx;
}
.demo{
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	
	padding: 10px 0;
	margin: 0 10px;
	border: #ddd solid 1px;
	
	&.bg{
		background-color: #007AFF;
	}
}

.item{
	margin: 5px 20px;
	font-size: 28rpx;
	padding: 10px;
	border: #ddd solid 1px;
}
</style>
