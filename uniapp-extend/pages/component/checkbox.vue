<template>
	<view>
		<view class="panel">
			<view class="panel-head">选择示例类型：</view>
			<view class="panel-body">
				<button
					v-for="(item,index) in array"
					:key="index"
					:type="pickerIndex == index ? 'primary':'default'" 
					size="mini" 
					:data-index="index"
					@tap="onSelectType"
				>{{item}}</button>
				<button
					type="default" 
					size="mini"
					style="color: #F43F3B;"
					@tap="toCheckboxs"
				>同页面多组件示例</button>
			</view>
		</view>
		<view class="panel">
			<view class="panel-head">操作：</view>
			<view class="panel-body">
				<button type="default" size="mini" @tap="getData">获取已选数据</button>
				<button type="default" size="mini" @tap="check" :disabled="disabled">全选</button>
				<button type="default" size="mini" @tap="invert" :disabled="disabled">反选</button>
				<button type="default" size="mini" @tap="cancel">取消全部</button>
				<button type="default" size="mini" @tap="reset">重置</button>
				<button type="default" size="mini" @tap="changeDisabled">{{disabledSelect?'取消禁用':'禁用'}}</button>
			</view>
		</view>
		<view class="panel">
			<view class="panel-head">组件演示：</view>
			<view class="panel-body">
				<helang-checkbox ref="checkbox" @change="onChange"></helang-checkbox>
			</view>
		</view>
	</view>
</template>

<script>
	import helangCheckbox from "@/components/helang-checkbox/helang-checkbox.vue"
	export default {
		components: {
		    "helang-checkbox":helangCheckbox
		},
		data() {
			return {
				pickerIndex:-1,
				array:['复选框 - 三栏排序','复选框 - 流式排序（最多只能选择5个）','单选框 - 二栏排序','单选框 - 一栏排序'],
				disabled:false,
				disabledSelect:false
			}
		},
		mounted(){
			/* 默认初始化组件 */
			this.$nextTick(()=>{
				this.selectDemoType(1);
			})
		},
		methods: {
			/* 创建列表数据 */
			creatorList(){
				let arr=[];
				for(let i=1; i<16;i++){
					arr.push({
						id:i,
						text:`第${i}项`
					});
				}
				return arr;
			},
			/* 监听选择类型 */
			onSelectType(e){
				let index = e.currentTarget.dataset.index;
				index = parseInt(index,10);
				this.selectDemoType(index);
			},
			/* 选择示例类别 */
			selectDemoType(index){
				switch(index){
					case 0:
					/* 复选框 三列布局 */
					this.$refs.checkbox.set({
						type:'checkbox',		// 类型：复选框
						column:3,				// 分列：3
						list:this.creatorList()	// 列表数据
					});
					this.disabled = false;
					break;
					case 1:
					/* 复选框 流式布局 */
					let list = this.creatorList();
					/* 
						给第 1,4,7,9 项添加默认选中
						此处仅为提供演示使用，具体使用参数请查看插件文章说明
					 */
					list.forEach((v,i)=>{	
						if(/^[1|4|7|9]$/.test(i)){
							list[i].checked = true;
						}
					});
					this.$refs.checkbox.set({
						type:'checkbox',		// 类型：复选框
						list:list,				// 列表数据
						maxSize:5,				// 最大选择数量
						maxFn:()=>{				// 超出最大选择数量时的回调函数
							// 此处可输出当前页面的数据
							// console.log(this.array);
							uni.showToast({
								title:'最多只能选择5个',
								icon:'none',
								duration:1000,
								mask:false
							});
						}
					});
					this.disabled = false;
					break;
					case 2:
					/* 单选框 三列布局 */
					this.$refs.checkbox.set({
						type:'radio',			// 类型：单选框
						index:2,				// 默认选中的项
						column:2,				// 分列
						list:this.creatorList()	// 列表数据
					});
					this.disabled = true;
					break;
					case 3:
					/* 单选框 一列布局 */
					this.$refs.checkbox.set({
						type:'radio',			// 类型：单选框
						column:1,				// 分列
						list:this.creatorList()	// 列表数据
					});
					this.disabled = true;
					break;
					default:
					
				}
				this.pickerIndex = index;
			},
			/* 获取数据 */
			getData(){
				let data = this.$refs.checkbox.get();	// 组件返回的数据
				uni.showToast({
					title:'在控制台看数据',
					icon:'none',
					duration:1000,
					mask:false,
					success:()=>{
						console.log(data);
					}
				});
			},
			/* 选项切换事件 */
			onChange(data){
				console.log(data);
			},
			/* 全选 */
			check(){
				this.$refs.checkbox.checkAll();		// 该功能在单选框模式下无效
				this.getData();
			},
			/* 取消全选 */
			cancel(){
				this.$refs.checkbox.cancelAll();	// 该功能在单选框模式下为取消当前选中项
				this.getData();
			},
			/* 反选 */
			invert(){
				this.$refs.checkbox.invertAll();	// 该功能在单选框模式下为取消当前选中项
				this.getData();
			},
			// 重置
			reset(){
				this.$refs.checkbox.reset();
				this.getData();
			},
			// 禁用
			changeDisabled(){
				this.disabledSelect = !this.disabledSelect;
				this.$refs.checkbox.disabled(this.disabledSelect);
			},
			// 同页面多组件示例
			toCheckboxs(){
				uni.navigateTo({
					url:'./checkboxs',
					fail(e){
						console.log(e)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f2f2f2;
	}
	.panel{
		background-color: #fff;
		margin-bottom: 20rpx;
		padding: 20rpx 20rpx 0 20rpx;
		
		&-head{
			font-size: 28rpx;
		}
		&-body{
			margin-top: 20rpx;
			padding: 20rpx 0 0 0;
			border-top: #eee solid 1px;
			overflow: hidden;
			
			> button{
				display: block;
				float: left;
				margin: 0 20rpx 20rpx 0;
				border: #007aff solid 1px;
				padding: 0 20rpx;
				border-radius: 0;
				
				&:after{
					display: none;
				}
			}
		}
	}
</style>
