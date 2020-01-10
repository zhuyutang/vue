<template>
	<div class="detail">
		<detail-header></detail-header>
		<detail-banner
			:title="title"
			:bannerImg="bannerImg"
			:imgArray="imgArray"
		></detail-banner>

		<div class="content">
			<detail-list
				:list="list"
			></detail-list>
		</div>
	</div>
</template>

<script>
	import DetailHeader from './components/Header'
	import DetailBanner from './components/Banner'
	import DetailList from './components/List'
	export default{
		components:{DetailHeader,DetailBanner,DetailList},
		data(){
			return {
				title:'',
				bannerImg:'',
				imgArray:[],
				list:[]
			}
		},
		methods:{
			getDetailInfo(){
				this.$ajax.get('/api/detail.json',{
					params:{
						id:this.$route.params.id
					}
				}).then(res=>{
					let result = res.data.data;
					this.title = result.sightName
					this.bannerImg = result.bannerImg
					this.imgArray = result.gallaryImgs
					this.list = result.categoryList
				})
			}
		},
		mounted(){
			this.getDetailInfo();
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height:50rem;
</style>
