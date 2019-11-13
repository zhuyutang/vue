<template>
	<div>
		<div class="search">
			<input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音" >
		</div>
		<div class="search-result" v-show="keyword" ref='searchResult'>
			<ul>
        <li
          class="search-item border-bottom"
          v-for="item of resultList"
          :key="item.id"
          @click="chooseCity(item)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import {mapMutations} from 'vuex'
	export default{
		name:'citySearch',
		props: {
		  cities: Object
		},
		data(){
			return{
				keyword:'',
				resultList:[],
				timer:0,
				hasNoData:false
			}
		},
		computed:{

		},
		watch:{
			keyword(){
				this.searchData()
			}
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.searchResult)
		},
		methods:{
			searchData(){
				let _this = this;
				if(this.timer){
					clearTimeout(this.timer)
				}

				this.hasNoData = false;
				if(!this.keyword){
					this.resultList = [];
					return;
				}

				this.timer = setTimeout(res=>{
					const result = []
					for (let i in _this.cities) {
					  _this.cities[i].map((value) => {
					    if (value.spell.includes(_this.keyword) || value.name.includes(_this.keyword)) {
					      result.push(value)
					    }
					  })
					}
					if(!result.length){
						_this.hasNoData = true;
					}
					_this.resultList = result
				},100)

			},
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
	.search
	  height: .72rem
	  padding: 0 .1rem
	  background: $bgColor
	  .search-input
	    box-sizing: border-box
	    width: 100%
	    height: .62rem
	    padding: 0 .1rem
	    line-height: .62rem
	    text-align: center
	    border-radius: .06rem
	    color: #666

		.search-result
			z-index: 1
			overflow: hidden
			position: absolute
			top: 1.58rem
			left: 0
			right: 0
			bottom: 0
			background: #eee
			.search-item
				line-height: .62rem
				padding-left: .2rem
				background: #fff
				color: #666
</style>
