<template>
		<div>
			<city-header></city-header>
			<city-search :cities="cities"></city-search>
			<city-list
				:cities="cities"
				:hot="hotCities"
				:letter="letter"
			>
			</city-list>

			<city-alphabet
				:cities="cities"
				@changeLetter="changeLetter"
				></city-alphabet>

		</div>
</template>

<script>
	import CityHeader from "./components/Header"
	import CitySearch from "./components/Search"
	import CityList from "./components/List"
	import CityAlphabet from "./components/Alphabet"
	export default{
		components:{CityHeader,CitySearch,CityList,CityAlphabet},
		data(){
			return{
				cities:{},
				hotCities:[],
				letter:''
			}
		},
		mounted(){
			this.getCityInfo()
		},
		methods:{
			getCityInfo(){
				this.$ajax.get('/api/city.json')
				  .then(res=>{
						this.cities = res.data.data.cities
						this.hotCities = res.data.data.hotCities
					})
			},
			changeLetter(e){
				this.letter = e;
			}
		}

	}
</script>

<style>
</style>
