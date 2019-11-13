<template>
	<div class="header">
		<div class="header-left">
			<span class="back-icon iconfont iconback"></span>
		</div>
		<div class="header-input">
			<span class="iconfont iconsousuo"></span>
			输入城市/景点/游玩主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{city}}
				<span class="arrow-icon iconfont iconxiala"></span>
			</div>
		</router-link>

	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name:"homeHeader",
		data() {
			return {

			}
		},
		computed:{
			...mapState(['city'])
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
			text-align:center;
			.back-icon
				font-size :.4rem
				color:#fff
		.header-right
			color:#fff
			float: right;
			padding: 0 .1rem;
			.arrow-icon
				font-size :.2rem

</style>
