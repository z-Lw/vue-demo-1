
<template>
       <div>
    {{n}}
    <button @click='add'>+1</button>
    <xxx/>
    <Demo22/>
    <yyy/>
    <zzz/>
    <hr>
    {{filter()}}
    </div>
</template>
<script>
const Vue=window.Vue
import Demo from './Demo.vue'
Vue.component('Demo22',{ //第二个参数和vue实例很像（组件）  第二种
  template:`
  <div>demo22222</div>
  `
})
const x={
  template:`
  <div>demo44444</div>
  `
}
export default
{
  components:{
    xxx:Demo, //第一种 优先使用
    yyy:{ // 第三种
              data(){
                return{
                  n:0
                }
              },
              template:`
              <div>yyy的n：{{n}}</div>
              `
    },
    zzz:x, //第4种
  },

  data(){
    return {
    n:0,
    array:[1,2,3,4,5,6]
  }},
 
  created(){
    //debugger
    console.log('出现在内存中,没有出现在页面中')
  },
  mounted(){
    //debugger
    console.log('出现在页面中')
  },
  updated(){
    console.log('更新了')
    console.log(this.n)
  },
  destroyed(){ //消失了
    console.log('已经消亡')
  },
  methods:{
    add(){
      this.n+=1
    },
    filter(){
      console.log('执行了函数')
      return this.array.filter(i=>i%2===0)
    }
 
  },
  // render(h){
  //   return h('div',[this.n,h('button',{on:{click:this.add}},'+1')])
  // }
}

</script>
<style >

</style>