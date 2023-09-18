import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    // 这样vue原型上的$bus就有了和vm/vc一样的方法和属性了
    Vue.prototype.$bus = this
  }
}).$mount('#app')
