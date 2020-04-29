<template>
	<view class="flex" :class="joinClass">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			direction:{
				 type:String,
				 default:'row',
			},
			wrap:{
				type:Boolean,
				default:false
			},
			aclinic:{
				 type:String,
				 default:'start',
			},
			vertical:{
				 type:String,
				 default:'center',
			},
		},
		data() {
			return {
				
			};
		},
		computed:{
			joinClass() {			   
				let wrap = this.wrap ? 'wrap' : 'nowrap';
				return `${this.direction} ${wrap} ${this.joinJustify()} ${this.joinAlign()}`;
			}
		},
		methods:{
			joinJustify(){
				return '';
			},
			joinAlign(){
				return '';
			}
		}
		
	}
</script>

<style lang="scss">
.flex{
	display: flex;
	
	&.row{
		flex-direction: row;
	}
	
	&.col{
		flex-direction: column;
	}
	
	&.nowrap{
		flex-wrap: nowrap;
	}
	
	&.wrap{
		flex-wrap: wrap;
	}
	
	&.justify-start{
		justify-content: flex-start;
	}
}
</style>
