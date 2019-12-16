<template>
	<view class="box">
		<view style="margin-bottom: 20rpx;">
			<view>
				<view style="font-size: 28rpx;">选择示例类型：</view>
				<view>
					<button 
						v-for="(item,index) in array"
						:key="index"
						:type="pickerIndex == index ? 'primary':'default'" 
						size="mini" 
						style="margin-right: 10rpx;"
						:data-index="index"
						@tap="onSelectType"
					>{{item}}</button>
				</view>
			</view>
			<view v-if="pickerIndex >= 0" style="margin-top: 20rpx;">
				<view style="font-size: 28rpx;">操作：</view>
				<button type="default" size="mini" @tap="getData">获取已选数据</button>
				<button type="default" size="mini" @tap="check" style="margin-left: 10rpx;">全选</button>
				<button type="default" size="mini" @tap="invert" style="margin-left: 10rpx;">反选</button>
				<button type="default" size="mini" @tap="cancel" style="margin-left: 10rpx;">取消</button>
				<view style="font-size: 28rpx;margin-top: 20rpx;padding-top: 20rpx;border-top: #e5e5e5 solid 1px;">组件演示：</view>
			</view>
		</view>
		<helang-checkbox ref="checkbox" @change="onChange"></helang-checkbox>
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
				array:['复选框 - 三栏排序','复选框 - 流式排序','单选框 - 二栏排序','单选框 - 三栏排序'],
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
					break;
					case 1:
					/* 复选框 流式布局 */
					let list = this.creatorList();
					/* 
						给第 1,4,6,7,8,9 项添加默认选中
						此处仅为提供演示使用，具体使用参数请查看插件文章说明
					 */
					list.forEach((v,i)=>{	
						if(/^[1|4|6|7|8|9]$/.test(i)){
							list[i].checked = true;
						}
					});
					this.$refs.checkbox.set({
						type:'checkbox',		// 类型：复选框
						list:list				// 列表数据
					});
					break;
					case 2:
					/* 单选框 三列布局 */
					this.$refs.checkbox.set({
						type:'radio',			// 类型：单选框
						index:2,				// 默认选中的项
						column:2,				// 分列
						list:this.creatorList()	// 列表数据
					});
					break;
					case 3:
					/* 单选框 三列布局 */
					this.$refs.checkbox.set({
						type:'radio',			// 类型：单选框
						column:3,				// 分列
						list:this.creatorList()	// 列表数据
					});
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
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	padding: 10rpx 20rpx;
}
</style>
