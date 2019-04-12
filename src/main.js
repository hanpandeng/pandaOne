// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import waterfall from './components/waterfall'

Vue.config.productionTip = false
//全局组件注册
Vue.component('waterfall', waterfall);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
