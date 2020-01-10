<template>
	<div>
		<!-- 递归 -->
		<div class="item" v-for="(item,index) of list" :key="index">
			<div class="item-title">
				<span class="item-title-icon iconfont">&#xe614;</span>
				{{item.title}}
			</div>
			<div class="item-children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"DetailList",
		props:{
			list:Array
		},
		data(){
			return{

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.item-title
		line-height :.8rem;
		font-size : .32rem;
		padding:0 .2rem;
		border-bottom :1px solid #eee;
		.item-title-icon
			color:#58eae3;
	.item-children
		padding :0 .2rem;
</style>
