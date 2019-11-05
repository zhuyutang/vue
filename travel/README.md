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
 - margin，padding如果设为百分比，则是根据当前元素的父元素的width计算
 - css3新的单位，vm,vh，相对于屏幕的百分比
 - ‘>>>’ 深度选择器，可以在父组件里改变子组件的样式

## js
### 数组循环 foreach map
- foreach()回改变原数组，没有返回值
- map() 不改变原来数组，返回新数组，效率比foreach高
