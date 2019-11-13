<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
			:value="item"
			@touchmove="handleTouchMove"
      @click="chooseLetter(item)"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
			timer:0
    }
  },

  methods: {
		chooseLetter(key){
			this.$emit('changeLetter',key)
		},
		handleTouchMove(e){
			//节流--滑动停止100ms后触发事件
			if(this.timer){
				clearTimeout(this.timer);
			}
			this.timer = setTimeout(res=>{
				let ele = this.$refs['A'][0];
				let eleTop = ele.offsetTop + 79;//a元素距离屏幕顶部的距离
				let eleHeight = ele.clientHeight;

				let currentTop = e.touches[0].clientY;
				let index = Math.floor((currentTop-eleTop)/eleHeight)


				console.log(eleTop,'--',currentTop);
				index = index >= 0 ? index : 0;
				index = index < this.letters.length ? index : this.letters.length-1;
				// if(index >=0 && index < this.letters.length){
					let key = this.letters[index];
					this.$emit('changeLetter',key)
				// }
			},16)

		}
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
