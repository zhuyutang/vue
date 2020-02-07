import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Shop from '@/pages/shop/Shop'
import Goods from '@/pages/shop/Goods'
import Ratings from '@/pages/shop/Ratings'
import Seller from '@/pages/shop/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
		{
		  path: '/city',
		  name: 'City',
		  component: City
		},
		{
			path:'/detail/:id',
			name:'Detail',
			component:Detail
		},
		{
			path:'/shop',
			name:'Shop',
			component:Shop,
      children:[
        {
          path:'goods',
          component:Goods
        },
        {
          path:'ratings',
          component:Ratings
        },
        {
          path:'seller',
          component:Seller
        }
      ]
		}
  ]
})
