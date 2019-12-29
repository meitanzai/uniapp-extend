<template>
	<view class="box">
		<view>演示文字： </view>
		<view class="content">
			<helang-highlight 
				:content="content" 
				:keys="keys" 
				:color="color"
				:weight="weight"
			></helang-highlight>
		</view>
		<view class="flex_col">
			<view>高亮项：</view>
			<view class="input_box flex_grow">
				<input type="text" v-model="inputKeys" placeholder="高亮项，例:C|JAVA">
			</view>
		</view>
		<view class="flex_col" style="margin:20rpx 0;">
			<view>颜色值：</view>
			<view class="input_box flex_grow">
				<input type="text" v-model="inputColor" placeholder="颜色值，例:#0099FF" adjust-position="true" cursor-spacing="10">
			</view>
		</view>
		<view>
			<button type="default" @tap="change">高亮一下</button>
		</view>
	</view>
</template>

<script>
	import highlight from "@/components/helang-highlight/helang-highlight.vue"
	export default {
		components: {
			"helang-highlight":highlight
		},
		data() {
			return {
				keys:"",
				content:`
						个人简介：河浪，一枚3年工作经验的WEB前端工程师。
						<div style="display: block;height:6px;"></div>
						所学专业：信息工程系（软件工程）。
						<div style="display: block;height:6px;"></div>
						掌握技能：HTML5，CSS3，js，es6，Node.js，jQuery，Vue.js，小程序,uni-app，能手写响应式布局、弹性布局框架。
						<div style="display: block;height:6px;"></div>
						在校所学科目：C，JAVA，C#，ASP.NET，MYSQL，SQL server，数据结构，软件测试，软件工程，软件架构，网络，信息安全，操作系统。
						<div style="display: block;height:6px;"></div>
						掌握框架：Bootstrap，layui，Element UI。
						<div style="display: block;height:6px;"></div>
						自我评价：具有良好的团队意识，专业的交流表达能力。
						<div style="display: block;height:6px;"></div>
						联系QQ：1846492969，邮箱：helang.love@qq.com
						`,
				color:"",
				weight:true,
				inputColor:"#0099FF",
				inputKeys:"软件|布局|框架|js|C|app"
			}
		},
		onLoad(){
			this.change();
		},
		methods: {
			change(){
				this.keys=this.inputKeys;
				this.color=this.inputColor;
			}
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
/* 行式弹性盒子 */
.flex_row {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}
 
/* 弹性盒子弹性容器 */
.flex_col .flex_grow{width:0;flex-grow: 1;}
.flex_row .flex_grow{flex-grow: 1;}
 
/* 弹性盒子允许换行 */
.flex_col.flex_wrap{flex-wrap: wrap;}
 
/* 弹性盒子居中对齐 */
.flex_col.flex_center,.flex_row.flex_center{justify-content: center;}
 
/* 列式弹性盒子两端对齐 */
.flex_col.flex_space{justify-content: space-between;}

.box{
	font-size: 28rpx;
	padding: 20rpx;
	
	.content{
		margin: 20rpx 0;
		padding: 20rpx 0;
		border-top: #e5e5e5 solid 1px;
		border-bottom: #e5e5e5 solid 1px;
	}
	
	.input_box{
		box-sizing: border-box;
		padding-left: 20rpx;
		
		input{
			border: #eee solid 1px;
			padding: 10rpx;
		}
	}
}

</style>
