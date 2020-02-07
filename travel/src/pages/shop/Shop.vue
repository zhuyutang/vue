<template>
	<div>
		<shop-header :seller="seller"></shop-header>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/seller">商家</router-link>
      </div>
    </div>

    <router-view></router-view>
	</div>
</template>

<script>
	import ShopHeader from "./components/header.vue"
	export default{
		components:{ShopHeader},
		data(){
			return {
				seller:{},
			}
		},
		created() {
			this.$ajax.get('/api/shop.json').then(res=>{
				this.seller = res.data.seller
			})
		}
	}
</script>

<style lang="stylus" scoped="scoped">
  @import "~styles/mixins.styl"
  .tab
    display :flex;
    width :100%;
    height:40px;
    line-height :40px;
    border-1px(rgba(7, 17, 27, 0.1));
    .tab-item
      flex:1;
      text-align :center;
      &>a
        display :block;
        font-size :14px;
        color:rgb(77,85,93);
        &.router-link-active
          color:rgb(240,20,20)
</style>
