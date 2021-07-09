<template>
	<view>
		<swiper class="swiper" 
			:duration="duration" 
			:current="swiperIndex" 
			:disable-programmatic-animation="true"
			 @change="onChange" 
			 @animationfinish="onAnimationfinish"
		>
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item">
					<view>{{item}}</view>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="a">
			<button @tap="showPopup = !showPopup" type="primary">
				选题{{topicIndex+1}}/{{dataList.length}}
			</button>
		</view>
		
		<view class="b" v-if="showPopup">
			<scroll-view scroll-y="true" >
				<button type="default"
					v-for="(item,index) in dataList" :key="index" 
					@tap="pickerTopic(index)"
					size="mini"
					:type="index == topicIndex ? 'warn':''"
				>{{index+1}}</button>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[],	// 数据源
				swiperList:[],	// 轮播图数据列表
				swiperIndex:0,	// 轮播图当前位置
				isChange:false,	// 是否切换
				topicIndex:0,	// 题目位置
				duration:200,	// 动画过渡时长
				showPopup:false	//弹窗是否显示
			}
		},
		onLoad(){
			let list = [];
			let size = Math.floor(Math.random()*500);
			if(size<200){
				size+=200;
			}
			for(let i=0;i<size;i++){
				list.push(`第${i+1}题`);
			}
			this.dataList = list;
			
			this.renderSwiper(0);
		},
		methods: {
			// 渲染 swiper
			renderSwiper(index){
				let list = [];
				let current = 1;
				if(this.dataList[index-1]){
					list.push(this.dataList[index-1]);
				}else{
					current = 0;
				}
				
				list.push(this.dataList[index])
				
				if(this.dataList[index+1]){
					list.push(this.dataList[index+1]);
				}
				
				this.duration = 0;
				
				setTimeout(()=>{
					this.swiperList = list;
					this.swiperIndex = current;
					
					setTimeout(()=>{
						this.duration = 200;
					},10)
				},10)
				
				
				
			},
			// 轮播图切换
			onChange(e){
				// 非触摸事件不做轮播图状态更新
				if(e.detail.source != "touch")return;
				
				// 标识已切换
				this.isChange = true;
				// 轮播图当前位置大于原来时则表示为下一题
				if(e.detail.current > this.swiperIndex){
					this.topicIndex++;
				}else{
					// 轮播图当前位置小于原来时则表示为上一题
					this.topicIndex--;
				}
				
				// 更新轮播图位置数值，为更新时让 Vue 能监听到数据有改变
				this.swiperIndex = e.detail.current;
			},
			// 轮播图动画结束
			onAnimationfinish(e){
				if(!this.isChange)return;
				
				this.isChange = false;
				setTimeout(()=>{
					this.renderSwiper(this.topicIndex);
				},10)
				
			},
			// 选择题目
			pickerTopic(index){
				this.topicIndex = index;
				this.renderSwiper(index)
			}
		}
	}
</script>

<style lang="scss">
page,page>view,swiper{
	height: 100%;
	background-color: #f3f3f3;
}

.swiper-item{
	padding: 28rpx;
	background-color: #f3f3f3;
	box-sizing: border-box;
	height: 100%;
	
	
	> view{
		line-height: 200px;
		font-size: 42px;
		text-align: center;
		background-color: #fff;
		height: 100%;
	}
}

.a{
	position: fixed;
	top: 50px;
	right: 0;
	z-index: 10;
}

.b{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 10;
	background-color: #fff;
	padding: 10px;
	border-top: #ccc solid 1px;
	height: 300px;
	
	> scroll-view{
		height: 100%;
	}
}
</style>
