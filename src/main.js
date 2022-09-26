import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入vant所有组件
import Vant from 'vant';
// 引入vant公共样式
import 'vant/lib/index.css';
// use方法使用vant
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
