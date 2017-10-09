import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import axios from 'axios'
import home from './components/home'
import seize from './components/seize'
import search from './components/search'
import homePage from './components/homePage'
import user from './components/user'

import Mint from'mint-ui'

import { Switch } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Switch.name, Switch);


Vue.use(Mint);
Vue.use(home)
Vue.use(seize)
Vue.use(search)
Vue.use(user)
Vue.use(homePage)

Vue.use(VueRouter);

Vue.prototype.$http = axios;
const router = new VueRouter(routerConfig);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
