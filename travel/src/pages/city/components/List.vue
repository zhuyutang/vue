<template>
	<div class="list" ref='wrapper'>
		<div class="content">
			<div class="area">
				<div class="title">当前城市</div>
				<div class="btn-list">
					<div class="btn-wrap">
						<div class="btn">{{currentCity}}</div>
					</div>
				</div>
			</div>

			<div class="area">
				<div class="title">热门城市</div>
				<div class="btn-list">
					<div class="btn-wrap"
						v-for="(item,index) in hot"
						:key="index"
						>
						<div class="btn" @click="chooseCity(item)">{{item.name}}</div>
					</div>
				</div>
			</div>

			<div class="area"
			 v-for="(item, key) of cities"
			 :key="key"
			 :ref="key"
			 >
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom"
						v-for="innerItem of item"
						:key="innerItem.id"
						@click="chooseCity(innerItem)">
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import {mapState,mapMutations} from 'vuex'
	export default {
		name: "cityList",
		props: {
			hot: Array,
			cities: Object,
			letter:String
		},
		data() {
			return {
				// currentCity: '厦门'
			}
		},
		computed:{
			...mapState({
				currentCity: 'city'
			})
		},
		watch:{
			letter(){
				let ele = this.$refs[this.letter][0]
				this.scroll.scrollToElement(ele);
			}
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.wrapper,{click:true})
		},

		methods:{
			chooseCity(item){
				// alert(11)
				this.changeCity(item.name)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	@import '~styles/varibles.styl'

	.list {
		overflow: hidden;
		position: absolute;
		left: 0;
		right: 0;
		top: 1.58rem;
		bottom: 0;
	}

	.area {
		.title {
			line-height: .54rem;
			background: #eee;
			padding-left: .2rem;
			color: #666;
			font-size: .26rem;
		}

		.btn-list {
			overflow: hidden;
			padding: .1rem .6rem .1rem .1rem;

			.btn-wrap {
				float: left;
				width: 33.33%;

				.btn {
					margin: .1rem;
					padding: .1rem 0;
					text-align: center;
					border: .02rem solid #ccc;
					border-radius: .06rem
				}
			}
		}

		.item-list {
			.item {
				line-height: .76rem;
				padding-left: .2rem
			}
		}
	}
</style>
