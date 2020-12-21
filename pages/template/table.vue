<template>
	<view class="content">
		<view class="itme-box">
			<view class="title">默认</view>
			<view class="h-table">
				<view class="h-tr h-tr-3 h-thead">
					<view class="h-td">主题</view>
					<view class="h-td">类名</view>
					<view class="h-td">备注</view>
				</view>
				<view class="h-tr h-tr-3">
					<view class="h-td">默认</view>
					<view class="h-td">无</view>
					<view class="h-td">默认样式</view>
				</view>
				<view class="h-tr h-tr-3">
					<view class="h-td">-</view>
					<view class="h-td">-</view>
					<view class="h-td">作者河浪</view>
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
	/* 表格样式开始 */
	.h-table{
		/* 行 */
		.h-tr{
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: flex-start;
			align-items: stretch;
			align-content: center;
			
			border-color: #ccc;
			border-style: solid;
			border-width: 0;
			border-top-width: 1px;
			border-left-width: 1px;
			border-bottom-width: 1px;
			color: #333;
			
			/* 等比分列，1-6列 */
			@for $i from 1 through 6
			{
				&-#{$i}{
					>.h-td{
						width:(100% / $i);
					}
				}
			}
			
			+ .h-tr{
				border-top-style: none;
			}
		}
		/* 单元格 */
		.h-td{
			box-sizing: border-box;
			padding: 3px;
			word-break:break-all;
			border-color: #ccc;
			border-style: solid;
			border-width: 0;
			border-right-width: 1px;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
			align-content: center;
			min-height: 64rpx;
			
			/* 跨列 */
			&-colspan{
				flex-grow: 1;
				width:0;
			}
			
			/* 内容顶部对齐 */
			&-top{
				align-items: flex-start;
				align-content:flex-start;
			}
			/* 内容底部对齐 */
			&-bottom{
				align-items: flex-end;
				align-content:flex-end;
			}
			/* 内容左边对齐 */
			&-left{
				justify-content: flex-start;
			}
			/* 内容右边对齐 */
			&-right{
				justify-content: flex-end;
			}
		}
		/* 表头 */
		.h-thead{
			background-color: #e6e6e6;
		}
		
		/* 表格虚线 */
		&-dashed{
			.h-tr{
				border-top-style: dashed;
				border-left-style: dashed;
				border-bottom-style: dashed;
			}
			.h-td{
				border-right-style: dashed;
			}
		}
		
		/* 表格主题 Map，颜色摘自 Bootstrap */
		$theme-table:(
			primary:(
				color:#fff,
				bgColor:#337ab7,
				border:#2e6da4
			),
			success:(
				color:#fff,
				bgColor:#5cb85c,
				border:#4cae4c
			),
			info:(
				color:#fff,
				bgColor:#5bc0de,
				border:#46b8da
			),
			warning:(
				color:#fff,
				bgColor:#f0ad4e,
				border:#eea236
			),
			danger:(
				color:#fff,
				bgColor:#d9534f,
				border:#d43f3a
			)
		);
		
		/* 生成主题代码 */
		$theme-table-keys:map-keys($theme-table);
		@each $k in $theme-table-keys {
			$item:map-get($theme-table,$k);
			&-#{$k}{
				.h-tr{
					border-top-color: map-get($item,border);
					border-left-color: map-get($item,border);
					border-bottom-color: map-get($item,border);
					color: map-get($item,bgColor);
				}
				.h-td{
					border-right-color: map-get($item,border);
					
				}
				.h-thead{
					background-color: map-get($item,bgColor);
					color: map-get($item,color);
				}
			}
		}
	}
	/* 表格样式结束 */
	
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