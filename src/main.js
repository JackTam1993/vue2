// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from 'components/Hello.vue'
import buttonList from 'components/buttonList.vue'
import appbar from './header.vue'
import card from 'components/card.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.min.css' // 使用 carbon 主题
Vue.use(MuseUI);
Vue.use(VueRouter);

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });

const routes = [
  {path:'/app',component:App},
  {path:'/hello',component:Hello},
  {path:'*',component:App},
  {path:'/card',component:card}
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');

new Vue({
  el:'#buttonList',
  template:'<buttonList/>',
  components:{ buttonList }
});

new Vue({
  el:'#appbar',
  template:'<appbar/>',
  components:{ appbar }
});


