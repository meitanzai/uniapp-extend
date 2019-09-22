<template>
	<view class="box">
		<view style="margin-bottom: 20rpx;">
			<picker @change="bindPickerChange" :value="0" :range="array">
				<button type="default">{{index >= 0 ? array[index] : '请选择示例类型'}}</button>
            </picker>
			<view v-if="index >= 0" style="margin-top: 20rpx;">
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
				index:-1,
				array:['复选框 - 三栏排序','复选框 - 二栏排序','复选框 - 一栏排序','复选框 - 流式排序','单选框 - 三栏排序'],
			}
		},
		onLoad(){
			
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
			/* 选择切换 */
			bindPickerChange(e){
				let index = e.detail.value;
				this.index = index;
				
				/* 单选框 */
				if(index == 4){
					this.$refs.checkbox.set({
						type:'radio',	// 类型：单选框
						index:2,		// 默认选中的项
						column:3,		// 分列
						list:this.creatorList()	// 列表数据
					});
					return;
				}
				this.$refs.checkbox.set({
					type:'checkbox',	// 类型：复选框
					column:3-index,		// 分列，有 1、2、3三种方式的平均分列，不传则流式自动
					list:this.creatorList()		// 列表数据
				});
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
