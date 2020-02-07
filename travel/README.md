# travel

> a travel web,use to study vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目总结
## css
 - 运用flex和float布局，可以实现多栏自适应布局
 - display:flex； flex-direction: column； justify-content: center 可以实现垂直居中布局
 - margin，padding如果设为百分比，则是根据当前元素的父元素的width计算
 - css3新的单位，vm,vh，相对于屏幕的百分比
 - ‘>>>’ 深度选择器，可以在父组件里改变子组件的样式
 - position：absolute； let：0；right：0；top:0; bottom:0; 可以使元素铺满屏幕
 - absolute的元素，可以通过同时设top，bottom来设置元素的高度。
 - 多行文字垂直居中，可将父标签设为：display：table；子标签设为：display：table-cell； vertical-align：top；


## js
### 数组循环 foreach map
- foreach()回改变原数组，没有返回值
- map() 不改变原来数组，返回新数组，效率比foreach高
- 节流函数
	``` javascript
		if(timer){
			clearTimeout(timer)
		}
		timer = setTimeout(()=>{
			//
		},200)
	```
- touchmove 事件
	```javascript
		e.touches[0].clientY //当前触点距离视窗的距离
		ele.offsetTop        // 某元素距离父元素顶部距离
		ele.clientHeight     // 某元素的高度
	```

## Vue
- this.$nextTick(fn),在页面渲染后执行回调

## 插件
### better-scroll
 - 默认阻止点击事件
 - 通过参数可控制
``` javascript
	# html 结构
		<div class="scroll-wrap" ref="scrollWrap">
			<ul class="content">
				<li></li>
			</ul>
		</div>

		let bscroll = new Bscroll(this.$refs.scrollWrap,{
      click:true,
      probeType:2,//只有手指滑动时才触发scroll事件
      momentum:false//惯性移动是否开启
    })
```


### vuex
	- mapState,mapMutations 可以批量应用vuex变量

``` javascript
	import {mapState,mapMutations} from 'vue'

	computed:{
		...mapState(['state','name'])
	},
	methods:{
		...mapMutations(['handle','hand2'])
	}
```
