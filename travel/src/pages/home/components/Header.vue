<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont iconback"></span>
		</div>
		<div class="header-input">
			<span class="iconfont iconsousuo"></span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			<span class="iconfont iconxiala"></span>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '~styles/varibles.styl'

	.header 
		background: $bgColor;
		height: $headerHeight;
		line-height: $headerHeight;
		display: flex;
		.header-input 
			background: #fff;
			border-radius: .1rem;
			margin-top: .12rem;
			height: .64rem;
			flex: 1;
			line-height: .64rem;
			padding-left: .2rem;
			color: #ccc;
		.header-left 
			width: .64rem;
			float: left;
		.header-right 
			float: right;
			padding: 0 .1rem;
	
</style>
