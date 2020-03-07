<template>
	<view>
		<view class="box-1" id="list-box">
			<view class="tips color_fff size_12 align_c" :class="{ 'show':ajax.loading }" @tap="getHistoryMsg">{{ajax.loadText}}</view>
			<scroll-view scroll-y="true" :style="{ 'height':scrollViewHeight }" :scroll-into-view="scrollIntoView" :upper-threshold="5" @scrolltoupper="getHistoryMsg">
				<view class="talk-list">
					<view v-for="(item,index) in talkList" :key="index" :id="`msg-${item.id}`">
						<view class="item flex_col" :class=" item.type == 1 ? 'push':'pull' ">
							<image :src="item.pic" mode="aspectFill" class="pic"></image>
							<view class="content">{{item.content}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="box-2 flex_col">
			<view class="flex_grow">
				<input type="text" class="content" v-model="content" placeholder="请输入聊天内容" placeholder-style="color:#DDD;" :cursor-spacing="6">
			</view>
			<button class="send" @tap="send">发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollViewHeight:'0px',		//滚动容器的高度
				scrollIntoView:'',	// 滚动容器的滚动目标元素
				talkList:[],
				ajax:{
					rows:20,	//每页数量
					page:1,	//页码
					flag:true,	// 请求开关
					loading:false,	// 加载中
					loadText:'正在获取消息'
				},
				content:''
			}
		},
		mounted() {
			this.$nextTick(()=>{
				this.setScrollHeight();
				
				this.getHistoryMsg();
			});
		},
		methods: {
			// 设置滚动容器高度
			setScrollHeight(){
				let view = uni.createSelectorQuery().in(this).select("#list-box");
				view.boundingClientRect((res) => {
					this.scrollViewHeight = `${Math.floor(res.height)}px`;
				}).exec();
			},
			// 获取历史消息
			getHistoryMsg(){
				if(!this.ajax.flag){
					return; //
				}
				
				// 此处用到 ES7 的 async/await 知识，为使代码更加优美。不懂的请自行学习。
				let get = async ()=>{
					this.hideLoadTips();
					this.ajax.flag = false;
					let data = await this.joinHistoryMsg();
					
					console.log('----- 模拟数据格式，供参考 -----');
					console.log(data);	// 查看请求返回的数据结构 
					
					// 获取待滚动元素ID，解决插入数据后，滚动条定位时使用
					let intoView = '';
										
					if(this.ajax.page>1){
						// 非第一页，则取历史消息数据的第一条信息元素
						intoView = `msg-${this.talkList[0].id}`;
					}else{
						// 第一页，则取当前消息数据的最后一条信息元素
						intoView = `msg-${data[data.length-1].id}`;
					}
					
					// 将获取到的消息数据合并到消息数组中
					this.talkList = [...data,...this.talkList];	
					
					// 数据挂载后执行，不懂的请自行阅读 Vue.js 文档对 Vue.nextTick 函数说明。
					this.$nextTick(()=>{
						// 设置当前滚动的位置
						this.scrollIntoView = intoView;
						
						this.hideLoadTips(true);
						
						if(data.length < this.ajax.rows){
							// 当前消息数据条数小于请求要求条数时，则无更多消息，不再允许请求。
							// 可在此处编写无更多消息数据时的逻辑
						}else{
							this.ajax.page ++;
							this.ajax.flag = true;
						}
						
					})
				}
				get();
				
				
			},
			// 拼接历史记录消息，正式项目可替换为请求历史记录接口
			joinHistoryMsg(){
				let join = ()=>{
					let arr = [];
					
					//通过当前页码及页数，模拟数据内容
					let startIndex = (this.ajax.page-1) * this.ajax.rows;
					let endIndex = startIndex + this.ajax.rows;
					for(let i = startIndex; i < endIndex; i++){
						arr.push({
							"id":i,	// 消息的ID
							"content":`这是历史记录的第${i+1}条消息`,	// 消息内容
							"type":Math.random() > 0.5 ? 1 : 0	,// 此为消息类别，设 1 为发出去的消息，0 为收到对方的消息,
							"pic":"/static/logo.png"	// 头像
						})
					}
					
					/*
						颠倒数组中元素的顺序。将最新的数据排在本次接口返回数据的最后面。
						后端接口按 消息的时间降序查找出当前页的数据后，再将本页数据按消息时间降序排序返回。
						这是数据的重点，因为页面滚动条和上拉加载历史的问题。
					 */
					arr.reverse();
					
					return arr;
				}
				
				// 此处用到 ES6 的 Promise 知识，不懂的请自行学习。
				return new Promise((done,fail)=>{
					// 无数据请求接口，由 setTimeout 模拟，正式项目替换为 ajax 即可。
					setTimeout(()=>{
						let data = join();
						done(data);
					},1500);
				})
			},
			// 隐藏加载提示
			hideLoadTips(flag){
				if(flag){
					this.ajax.loadText = '消息获取成功';
					setTimeout(()=>{
						this.ajax.loading = false;
					},300);
				}else{
					this.ajax.loading = true;
					this.ajax.loadText = '正在获取消息';
				}
			},
			// 发送信息
			send(){
				if(!this.content){
					uni.showToast({
						title:'请输入有效的内容',
						icon:'none'
					})
					return;
				}
				
				uni.showLoading({
					title:'正在发送'
				})
				setTimeout(()=>{
					uni.hideLoading();
					
					
					
					// 将当前发送信息 添加到消息列表。
					let data = {
						"id":new Date().getTime(),
						"content":this.content,
						"type":1,
						"pic":"/static/logo.png"
					}
					this.talkList.push(data);
					
					this.$nextTick(()=>{
						// 清空内容框中的内容
						this.content = '';
						// 设置当前滚动的位置为最新发送的消息元素
						this.scrollIntoView = `msg-${data.id}`;
					})
				},1500);
			}
		}
	}
</script>

<style lang="scss">
	@import "../../lib/global.scss";
	page{
		background-color: #F3F3F3;
		font-size: 28rpx;
		
	}
	.box-1,.box-2{
		position: absolute;
		left: 0;
		width: 100%;
	}
	
	.box-1{
		top: 0;
		bottom: 100rpx;
		height: auto;
		z-index: 1;
		overflow: hidden;
		
		/* 加载数据提示 */
		.tips{
			position: absolute;
			left: 0;
			top:0;
			width: 100%;
			z-index: 9;
			background-color: rgba(0,0,0,0.15);
			height: 72rpx;
			line-height: 72rpx;
			transform:translateY(-80rpx);
			transition: transform 0.3s ease-in-out 0s;
			
			&.show{
				transform:translateY(0);
			}
		}
	}
	.box-2{
		bottom: 0;
		height: 100rpx;
		z-index: 2;
		border-top: #e5e5e5 solid 1px;
		padding: 0 20rpx;
		
		.content{
			background-color: #fff;
			height: 64rpx;
			padding: 0 20rpx;
			border-radius: 32rpx;
			font-size: 28rpx;
		}
		
		.send{
			background-color: #42b983;
			color: #fff;
			height: 64rpx;
			margin-left: 20rpx;
			border-radius: 32rpx;
			padding: 0;
			width: 120rpx;
			line-height: 62rpx;
			
			&:active{
				background-color: #5fc496;
			}
		}
	}
	
	.talk-list{
		padding-bottom: 20rpx;
		
		/* 消息项，基础类 */
		.item{
			padding: 20rpx 20rpx 0 20rpx;
			align-items:flex-start;
			align-content:flex-start;
			color: #333;
			
			.pic{
				width: 92rpx;
				height: 92rpx;
				border-radius: 50%;
				border: #fff solid 1px;
			}
			
			.content{
				padding: 20rpx;
				border-radius: 4px;
				max-width: 500rpx;
				word-break: break-all;
				line-height: 52rpx;
				position: relative;
			}
			
			/* 收到的消息 */
			&.pull{
				.content{
					margin-left: 32rpx;
					background-color: #fff;
					
					&::after{
						content: '';
						display: block;
						width: 0;
						height: 0;
						border-top: 16rpx solid transparent;
						border-bottom: 16rpx solid transparent;
						border-right: 20rpx solid #fff;
						position: absolute;
						top: 30rpx;
						left: -18rpx;
					}
				}
			}
			
			/* 发出的消息 */
			&.push{
				/* 主轴为水平方向，起点在右端。使不修改DOM结构，也能改变元素排列顺序 */
				flex-direction: row-reverse;
				
				.content{
					margin-right: 32rpx;
					background-color: #a0e959;
					
					&::after{
						content: '';
						display: block;
						width: 0;
						height: 0;
						border-top: 16rpx solid transparent;
						border-bottom: 16rpx solid transparent;
						border-left: 20rpx solid #a0e959;
						position: absolute;
						top: 30rpx;
						right: -18rpx;
					}
				}
			}
		}
	}
</style>
