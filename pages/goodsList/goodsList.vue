<template>
	<view class="list_box">
		<view class="left">
			<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
				<view class="item" 
					v-for="(item,index) in leftArray"
					:key="index" 
					:class="{ 'active':index==leftIndex }" 
					:data-index="index"
					@tap="leftTap"
				>{{item}}</view>
            </scroll-view>
		</view>
		<view class="main">
			<scroll-view  scroll-y="true" :style="{ 'height':scrollHeight }" @scroll="mainScroll" :scroll-into-view="scrollInto" scroll-with-animation="true" @touchstart="mainTouch" id="scroll-el">
				<view class="item" v-for="(item,index) in mainArray" :key="index" :id="'item-'+index">
					<view class="title">
						<view>{{item.title}}</view>
					</view>
					<view class="goods" v-for="(item2,index2) in item.list" :key="index2">
						<image src="/static/logo.png" mode=""></image>
						<view>
							<view>第{{index2+1}}个商品标题</view>
							<view class="describe">第{{index2+1}}个商品的描述内容</view>
							<view class="money">第{{index2+1}}个商品的价格</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight:'500px',
				leftArray:[],
				mainArray:[],
				topArr:[],
				leftIndex:0,
				isMainScroll:false,
				scrollInto:''
			}
		},
		onLoad(){
			uni.getSystemInfo({
				success:(res)=>{
					/* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
					this.scrollHeight=`${res.windowHeight}px`;
				}
			});
		},
		computed:{
			
		},
		mounted(){
			this.getListData();
		},
		methods: {
			/* 获取列表数据 */
			getListData(){
				/* 因无真实数据，当前方法模拟数据 */
				let [left,main]=[[],[]];

				for(let i=0;i<10;i++){
					left.push(`${i+1}类商品`);
					
					let list=[];
					for(let j=0;j<(i+1);j++){
						list.push(j);
					}
					main.push({
						title:`第${i+1}类商品标题`,
						list
					})
				}
				this.leftArray=left;
				this.mainArray=main;
				
				this.$nextTick(()=>{
					this.getElementTop();
				});
			},
			/* 获取元素顶部信息 */
			getElementTop(){
				/* Promise 对象数组 */
				let p_arr=[];
				
				/* 新建 Promise 方法 */
				let new_p=(selector)=>{
					return new Promise((resolve,reject)=>{
						let view = uni.createSelectorQuery().select(selector);
						view.boundingClientRect(data => {
							resolve(data.top);
						}).exec();
					})
				}
				
				/* 遍历数据，创建相应的 Promise 数组数据 */
				this.mainArray.forEach((item,index)=>{
					p_arr.push(new_p(`#item-${index}`));
				});
				
				/* 主区域滚动容器的顶部距离 */
				new_p("#scroll-el").then((res)=>{
					let top = res;
					
					// #ifdef H5
					top+=44;	//因固定提示块的需求，H5的默认标题栏是44px
					// #endif
					
					/* 所有节点信息返回后调用该方法 */
					Promise.all(p_arr).then((data)=>{
						this.topArr=data;
					});
				})
			},
			/* 主区域滚动监听 */
			mainScroll(e){
				if(!this.isMainScroll){
					return;
				}
				let top =e.detail.scrollTop;
				let index=-1;
				
				if(top>=this.topArr[this.topArr.length-1]){
					index=this.topArr.length-1;
				}else{
					index=this.topArr.findIndex((item,index)=>{
						return this.topArr[index+1] >= top;
					});
				}
				this.leftIndex=(index < 0 ? 0: index);
			},
			/* 主区域触摸 */
			mainTouch(){
				this.isMainScroll=true;
			},
			/* 左侧导航点击 */
			leftTap(e){
				let index=e.currentTarget.dataset.index;
				this.isMainScroll=false;
				this.leftIndex=Number(index);
				this.scrollInto=`item-${index}`;
				
			}
		}
	}
</script>

<style lang="scss">
.list_box{
	display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
	font-size: 28rpx;
	
	.left{
		width: 200rpx;
		background-color: #f6f6f6;
		line-height: 80rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		
		.item{
			padding-left: 20rpx;
			position: relative;
			&:not(:first-child) {
				margin-top: 1px;
			
				&::after {
					content: '';
					display: block;
					height: 0;
					border-top: #d6d6d6 solid 1px;
					width: 620upx;
					position: absolute;
					top: -1px;
					right: 0;
					transform:scaleY(0.5);	/* 1px像素 */
				}
			}
			
			&.active,&:active{
				color: #42b983;
				background-color: #fff;
			}
		}
	}
	.main{
		background-color: #fff;
		padding-left: 20rpx;
		width: 0;
		flex-grow: 1;
		box-sizing: border-box;
		
		
		
		.title{
			line-height: 64rpx;
			font-size: 24rpx;
			font-weight: bold;
			color: #666;
			background-color: #fff;
			position: sticky;
			top: 0;
			z-index: 999;
		}
		
		.item{
			padding-bottom: 10rpx;
			border-bottom: #eee solid 1px;
		}
		
		.goods{
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: center;
			align-content: center;
			margin-bottom: 10rpx;
			
			&>image{
				width: 120rpx;
				height: 120rpx;
				margin-right: 16rpx;
			}
			
			.describe{
				font-size: 24rpx;
				color: #999;
			}
			
			.money{
				font-size: 24rpx;
				color: #efba21;
			}
		}
	}
}
</style>
