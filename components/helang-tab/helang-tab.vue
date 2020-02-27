<template>
	<view>
		<scroll-view scroll-x="true" style="width: 300px;" :scroll-into-view="v1">
			<view class="flex_col" style="width: 800px;">
				<view v-for="(v,i) in a" :key="i" :id="'a-'+i" style="height: 110px;;">这是第{{v}}项</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a:[1,2,3,4,5,6,7],
				v1:""
			};
		},
		mounted() {
			setTimeout(()=>{
				this.v1 = `a-2`;
				
				console.log(this.v1)
			},1000);
		}
	}
</script>

<style lang="scss">
/* 列式弹性盒子 */
.flex_col {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}
</style>
