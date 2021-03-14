<template>
	<view>
		<picker mode="multiSelector" @change="change" :value="index" :range="rangeArr" range-key="name">
			<slot name="default"></slot>
		</picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rangeArr: [],
				index: 0,
			};
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				let arr = [];
				let hour = [];
				let minute = [];
				let sec = [];
				
				for(let h=0;h<24;h++){
					hour.push({
						name:`${h}时`,
						value:h
					});
				}
				
				for(let m=0;m<60;m++){
					minute.push({
						name:`${m}分`,
						value:m
					});
				}
				
				for(let s=0;s<60;s++){
					sec.push({
						name:`${s}秒`,
						value:s
					});
				}
				
				arr.push(hour);
				arr.push(minute);
				arr.push(sec);
				
				this.rangeArr = arr;
			},
			change(e){
				let value = e.detail.value;
				console.log(value);
				console.log(this.rangeArr[0][value[0]]);
			}
		}
	}
</script>

<style>

</style>
