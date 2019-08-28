<template>
	<view class="box">
		<view style="margin-bottom: 20rpx;">
			<picker @change="bindPickerChange" :value="0" :range="array">
				<button type="default">{{index >= 0 ? array[index] : '请选择示例类型'}}</button>
            </picker>
			<button type="default" style="margin-top: 20rpx;" @tap="getData" v-if="index >= 0">获取已选择数据</button>
		</view>
		<helang-checkbox ref="checkbox"></helang-checkbox>
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
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	padding: 10rpx 20rpx;
}
</style>
