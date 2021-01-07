// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// import { render } from 'sass'
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// import Demo from './Demo.vue'
import Demo2 from './Demo2.vue'
import Demo3 from './Demo3.vue'
//component组件写法
const Vue=window.Vue
const vm=new Vue({
  components:{Demo2,Demo3},
  data:{
    visible:true,
    n:1
  },
  template:`
  <div>
    
  <button @click='toggle'>toggle</button>
  <hr>
  <Demo2 v-if='visible===true'/>
  <hr>
  {{n}}
  <Demo3 :message="'你好 props '+n"  :fn="add"/>
  
  </div>
  `,
  methods:{
    toggle(){
      this.visible=!this.visible
    },
    add(){
      this.n+=1
    }
  }
}
).$mount('#app')

