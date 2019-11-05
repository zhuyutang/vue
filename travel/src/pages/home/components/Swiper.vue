<template>
	<div class="wrapper">
		<swiper class="swiper" :options="swiperOptions" v-if="showSwiper">
			<swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
				<img class="swiper-img" :src="item.imgUrl" alt="">
			</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		name: 'HomeSwiper',
		props: {
		  list: Array
		},
		data(){
			return{
				swiperOptions:{
					pagination: '.swiper-pagination',
					loop: true
				}
			}
		},
		computed:{
			showSwiper(){
				return this.list.length;
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper
		overflow: hidden;
		width :100%;
		background :#eee;
		height :33vw;
		.swiper,.swiper-slide
				height: 33vw;
			.swiper-img
				width :100%;
				height 100%;
</style>
