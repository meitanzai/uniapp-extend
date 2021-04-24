<template>
	<view class="content">
		<view class="itme-box">
			<view class="title">默认</view>
			<view class="h-table">
				<view class="h-tr h-tr-3 h-thead ">
					<view class="h-td">主题</view>
					<view class="h-td">类名</view>
					<view class="h-td">备注</view>
				</view>
				<view class="h-tr h-tr-3">
					<view class="h-td">默认</view>
					<view class="h-td h-td-colspan h-td-rowspan">
						<view class="h-tr h-tr-2">
							<view class="h-td">h-td-rowspan</view>
							<view class="h-td">跨行单元格容器</view>
						</view>
						<view class="h-tr h-tr-2">
							<view class="h-td">-</view>
							<view class="h-td">版本1.0.1</view>
						</view>
						<view class="h-tr h-tr-2">
							<view class="h-td">作者</view>
							<view class="h-td">河浪</view>
						</view>
					</view>
				</view>
				<view class="h-tr h-tr-3">
					<view class="h-td">-</view>
					<view class="h-td">-</view>
					<view class="h-td">-</view>
				</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">对齐/虚线/跨列/分列</view>
			<view class="h-table h-table-dashed">
				<view class="h-tr h-tr-4 h-thead">
					<view class="h-td">表头1</view>
					<view class="h-td">表头2</view>
					<view class="h-td">表头3</view>
					<view class="h-td">表头4</view>
				</view>
				<view class="h-tr h-tr-4">
					<view class="h-td">默认水平垂直居中</view>
					<view class="h-td">虚线</view>
					<view class="h-td">分4列</view>
					<view class="h-td"></view>
				</view>
				<view class="h-tr h-tr-4">
					<view class="h-td">
						<button style="font-size: 14px;padding: 30px 10px;line-height: 14px;">我是一个按钮</button>
					</view>
					<view class="h-td h-td-top">顶对齐</view>
					<view class="h-td h-td-bottom">底对齐</view>
					<view class="h-td">-</view>
				</view>
				<view class="h-tr h-tr-4">
					<view class="h-td h-td-left">左对齐</view>
					<view class="h-td h-td-right">右对齐</view>
					<view class="h-td h-td-colspan">老子今天跨两列</view>
				</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">固定列</view>
			<view class="h-table">
				<view class="h-tr h-thead">
					<view class="h-td" style="width: 140rpx;">固定列</view>
					<view class="h-td h-td-colspan">活动列</view>
				</view>
				<view class="h-tr">
					<view class="h-td" style="width: 140rpx;">140rpx</view>
					<view class="h-td h-td-colspan">添加跨列类名，自动占满剩余宽度</view>
				</view>
			</view>
		</view>
		
		<view class="itme-box">
			<view class="title">主题</view>
			<view class="h-table h-table-primary">
				<view class="h-tr h-tr-2 h-thead">
					<view class="h-td">主题名</view>
					<view class="h-td">类名</view>
				</view>
				<view class="h-tr h-tr-2">
					<view class="h-td">首选项</view>
					<view class="h-td">h-table-primary</view>
				</view>
			</view>
			<view style="height: 20rpx;"></view>
			<view class="h-table h-table-success">
				<view class="h-tr h-tr-2 h-thead">
					<view class="h-td">主题名</view>
					<view class="h-td">类名</view>
				</view>
				<view class="h-tr h-tr-2">
					<view class="h-td">成功</view>
					<view class="h-td">h-table-success</view>
				</view>
			</view>
			<view style="height: 20rpx;"></view>
			<view class="h-table h-table-info">
				<view class="h-tr h-tr-2 h-thead">
					<view class="h-td">主题名</view>
					<view class="h-td">类名</view>
				</view>
				<view class="h-tr h-tr-2">
					<view class="h-td">一般信息</view>
					<view class="h-td">h-table-info</view>
				</view>
			</view>
			<view style="height: 20rpx;"></view>
			<view class="h-table h-table-warning">
				<view class="h-tr h-tr-2 h-thead">
					<view class="h-td">主题名</view>
					<view class="h-td">类名</view>
				</view>
				<view class="h-tr h-tr-2">
					<view class="h-td">警告</view>
					<view class="h-td">h-table-warning</view>
				</view>
			</view>
			<view style="height: 20rpx;"></view>
			<view class="h-table h-table-danger">
				<view class="h-tr h-tr-2 h-thead">
					<view class="h-td">主题名</view>
					<view class="h-td">类名</view>
				</view>
				<view class="h-tr h-tr-2">
					<view class="h-td">危险</view>
					<view class="h-td">h-table-danger</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	/* 引入表格样式表 */
	@import "../../lib/helang-table.scss";
	
	
	/* 示例样式开始 */
	.content {
		font-size: 28rpx;
		background-color: #f3f3f3;
		padding: 20rpx;
		
		.red{
			background-color: #DD524D;
			color: #fff;
			text-align: center;
		}
		
		.green{
			background-color: #42b983;
			color: #fff;
			text-align: center;
		}
		
		.blue{
			background-color: #007AFF;
			color: #fff;
			text-align: center;
		}
		
		.yellow{
			background-color: #ffaa00;
			color: #fff;
			text-align: center;
		}
		

		.itme-box {
			padding: 20rpx;
			background-color: #fff;
			margin-bottom: 20rpx;

			.title {
				padding-bottom: 20rpx;
				margin-bottom: 20rpx;
				border-bottom: #e5e5e5 solid 1px;
				line-height: normal;
			}
			
			.width-fill{
				width: 100%;
			}
			
			.preview-box{
				height: 400rpx;
				box-shadow: 0 0 4px rgba(0,0,0,0.3);
			}
		}
	}
	/* 示例样式结束 */
</style>