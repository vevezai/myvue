import Vue from 'vue'
import App from './App.vue'
import Index from './Index.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

var router = new VueRouter({
  routes:[
    {name:'index',path:'./index',component:Index}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (fn) => {
    return fn(App)
  }
})
