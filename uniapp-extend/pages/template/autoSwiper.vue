<template>
	<view>
		<swiper class="swiper" :style="sS" @change="change" :circular="true">
			<swiper-item v-for="(item,index) in list" :key="index">
				<image :src="item" mode="widthFix" class="aaa"></image>
			</swiper-item>
		</swiper>
		
		<view>占位文字</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					'/static/images/idiom/002.jpg',
					'/static/images/douyin/0.jpg',
					'/static/images/douyin/4.jpg'
				],
				hArr:[],
				sS:''
			}
		},
		onReady() {
			const query = uni.createSelectorQuery();
			setTimeout(()=>{
				query.selectAll('.aaa').boundingClientRect(data => {
				  this.hArr = data;
				  this.init();
				}).exec();
			},1000)
		},
		methods: {
			init(){
				this.sS = `height:${this.hArr[0].height}px`;
				
			},
			change(e){
				this.sS = `height:${this.hArr[e.detail.current].height}px`;
			}
		}
	}
</script>

<style lang="scss">
swiper{
	height: 500rpx;
	width: 100%;
	transition: height 0.8s ease-in-out 0s;
	
	image{
		width: 100%;
	}
}
</style>
