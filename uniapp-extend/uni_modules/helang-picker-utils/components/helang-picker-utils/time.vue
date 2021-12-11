<template>
	<view class="helang-picker-utils">
		<picker @change="bindPickerChange" :value="index" :range="array">
			<slot name="default"></slot>
		</picker>
	</view>
</template>

<script>
	export default {
		name:"helang-picker-utils-time",
		options:{
			virtualHost:true
		},
		props:{
			params:{
				type: Object,
				default(){
					return {}
				}
			},
			tag:{
				type:String | Number,
				default:''
			},
			index:{
				type:Number,
				default:-1
			}
		},
		data() {
			return {
				array: ['中国', '美国', '巴西', '日本']
			};
		},
		methods:{
			bindPickerChange(e){
				console.log(e.detail);
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
