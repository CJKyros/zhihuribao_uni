<template>
	<view>
		<view class="content">
			<view class="title">{{title}}</view>
			<view id="lala" class="">
				<!-- <rich-text  v-html="strings"></rich-text> -->
				<text>{{strings}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: "",
				strings: ''
			};
		},
		onLoad(e) {
			uni.showLoading({
				title: "数据加载中...."
			})
			uni.request({
				url: 'https://news-at.zhihu.com/api/4/news/' + e.id,
				method: 'GET',
				data: {},
				success: res => {
					this.title = res.data.title;
					this.strings = res.data.body;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
	.content {
		padding: 10upx 2%;
		width: 96%;
		flex-wrap: wrap;
	}

	.title {
		line-height: 2em;
		font-weight: 700;
		font-size: 38upx;
	}

	.art-content {
		line-height: 2em;
	}
</style>
