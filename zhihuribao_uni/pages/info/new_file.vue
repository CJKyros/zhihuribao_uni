<template>
	<view>
		{{title}}
		|||||||||||||||||||||
		{{msg}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:'',
				title:'' 
			};
		},
		onLoad(e) {
			uni.showLoading({
				title:"加载中。。。。。"
			})
			uni.request({
				url: 'https://news-at.zhihu.com/api/3/news/' + e.id,
				method: 'GET',
				data: {},
				success: res => {
					this.title = res.data.title;
					this.msg = res.data.body;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>

</style>
