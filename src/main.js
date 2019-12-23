import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Switch } from 'vant';
import { Row, Col } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NoticeBar } from 'vant';
import { Card } from 'vant';

Vue.use(Card);
Vue.use(NoticeBar);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Row).use(Col);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Switch)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
