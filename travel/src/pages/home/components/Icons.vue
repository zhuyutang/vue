<template>
	<div class="icons">
		<swiper :options="swiperOptions">
			<swiper-slide v-for="(item,index) in pages" :key="index">
				<div class="icon-item" v-for="(iconInfo,index) in item" :key="index">
					<img class='icon-img' :src='iconInfo.imgUrl' />
					<p class="icon-desc">{{iconInfo.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default{
		name:"homeIcons",
		props:{
			list:Array
		},
		data(){
			return{
				swiperOptions:{
					autoplay: false
				}
			}
		},
		computed:{
			pages(){
				let pages = [];
				let iconsList = this.list;
				iconsList.map((item,index)=>{
					let pageNo = Math.floor(index/8);
					if(!pages[pageNo]){
						pages[pageNo] = [];
					}
					pages[pageNo].push(item)
				})
				return pages;
			}

		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import "~styles/varibles.styl"
	@import "~styles/mixins.styl"
	.icons
		padding :.1rem 0;
		height :50%vw;
		overflow:hidden;
		.icon-item
			width :25%;
			height :25%vw;
			float :left;
			box-sizing :border-box;
			text-align :center;
			position :relative;
			padding :.1rem;
			padding-bottom :.54rem;
			.icon-img
				height :100%;
			.icon-desc
				width :100%;
				margin :0 -.1rem;
				position :absolute;
				bottom 0;
				line-height :.44rem;
				height :.44rem;
				color:$darkTextColor;
				ellipsis();



</style>
