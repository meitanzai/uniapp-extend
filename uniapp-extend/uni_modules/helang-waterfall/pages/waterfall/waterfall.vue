<template>
	<view>
		<view class="waterfall-box h-flex-x h-flex-2">
			<view>
				<view v-for="(item,index) in leftList" :key="item._render_id" 
					class="list-item" 
					:class="{'show': showPage >= item._current_page }"
				>
					<helang-waterfall
						:params="item" 
						tag="left"
						:index="index"
						@height="onHeight"
						@click="onClick"
					></helang-waterfall>
				</view>
			</view>
			<view>
				<view v-for="(item,index) in rightList" :key="item._render_id" 
					class="list-item"
					:class="{'show': showPage >= item._current_page }"
				>
					<helang-waterfall
						:params="item" 
						@height="onHeight"
						@click="onClick"
						tag="right"
						:index="index"
					></helang-waterfall>
				</view>
			</view>
		</view>
		<view class="load-txt">{{ajax.loadTxt}}</view>
	</view>
</template>

<script>
	import helangWaterfall from "@/uni_modules/helang-waterfall/components/helang-waterfall/helang-waterfall"
	
	// 列表接口模拟数据
	import mockData from '../../mock-data/waterfall-list.js'
	
	export default {
		components: {
			"helang-waterfall": helangWaterfall
		},
		data() {
			return {
				// 左侧列表高度
				leftHeight: 0,
				// 右侧列表高度
				rightHeight: 0,
				// 左侧列表数据
				leftList: [],
				// 右侧列表数据
				rightList: [],
				// 异步请求相关
				ajax: {
					// 是否可以加载
					load: true,
					// 加载中提示文字
					loadTxt: '',
					// 每页的请求条件
					rows:10,
					// 页码
					page:1,
				},
				// 待渲染列表
				awaitRenderList:[],
				showPage:-1
			}
		},
		onReady() {
			this.getList();
		},
		// 触底触发
		onReachBottom() {
			this.getList();
		},
		// 下拉刷新
		onPullDownRefresh(){
			// 正常情况下接口返回应该很会很快。故意延迟调用，让用户有在刷新的体验感
			setTimeout(()=>{
				this.ajax.page = 1;
				this.ajax.load = true;
				this.getList();
			},800);
		},
		methods: {
			// 监听高度变化
			onHeight(height, tag) {
				if (tag == 'left') {
					this.leftHeight += height;
				} else {
					this.rightHeight += height;
				}
				this.renderList();
			},
			// 组件点击事件
			onClick(index, tag){
				console.log(index, tag);
				// 对应的数据
				if(tag == 'left'){
					console.log(this.leftList[index]);
				}else{
					console.log(this.rightList[index]);
				}
				let direction = {
					"left":'左',
					"right":'右'
				}
				uni.showToast({
					title:`${direction[tag]}侧列表第${index+1}个被点击`,
					icon:'none'
				})
			},
			// 获取数据
			getList() {
				if (!this.ajax.load) {
					return;
				}
				this.ajax.load = false;
				this.ajax.loadTxt = '加载中';
				
				mockData.getList().then(res=>{
					// 获取到的数据，请注意数据结构
					console.log(res);
					
					// 第一页初始化数据
					if(this.ajax.page == 1){
						// 将原来的列表左右高度重置为0
						this.leftHeight = 0;
						this.rightHeight = 0;
						// 将原来的数据重置为空
						this.leftList = [];
						this.rightList = [];
						// 可显示的页码重置
						this.showPage = -1;
						// 关闭下拉
						uni.stopPullDownRefresh();
					}
					
					if(!res || res.length < 1){
						this.ajax.loadTxt = '没有更多了';
						return;
					}
					this.awaitRenderList = res;
					this.renderList();
				})
			},
			// 渲染列表，这里实现瀑布流的左右分栏
			renderList() {
				// 待渲染长度为 0 时表示已渲染完成
				if(this.awaitRenderList.length < 1){
					console.log(`--- 第${this.ajax.page}页  渲染完成 ---`);
					this.showPage = this.ajax.page;
					this.ajax.load = true;
					this.ajax.loadTxt = '上拉加载更多';
					this.ajax.page++;
					return;
				}
				let item = {
					...this.awaitRenderList.splice(0,1)[0],
					// 当前数据添加当前页面标识
					_current_page:this.ajax.page,
					// 当前数据添加一个渲染id，解决 v-for 重复会出现不执行 load 的 BUG
					_render_id:new Date().getTime()
				};
				
				if(this.leftHeight > this.rightHeight){
					this.rightList.push(item);
				}else{
					this.leftList.push(item);
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f3f3f3;
	}
</style>

<style lang="scss" scoped>
	.waterfall-box {
		padding: 20rpx 10rpx;
		box-sizing: border-box;

		>view {
			padding: 0 10rpx;
		}
		
		.list-item{
			margin-bottom: 0;
			// 设置透明，默认是可视的
			opacity: 0;
			// 默认超出隐藏，不影响加载中的文字显示效果
			overflow: hidden;
			height: 0;
			
			&.show{
				margin-bottom: 20rpx;
				opacity: 1;
				overflow: auto;
				height: auto;
			}
		}
	}

	.h-flex-x {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;

		&.h-flex-2 {
			>view {
				width: 50%;
			}
		}
	}
	
	.load-txt{
		padding: 0 0 20rpx 0;
		text-align: center;
		color: #999;
		font-size: 24rpx;
	}
</style>