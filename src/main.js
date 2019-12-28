import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios';
// import qs from 'Qs';
import { Tabbar, TabbarItem, Switch } from 'vant';
import { Row, Col } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NoticeBar } from 'vant';
import { Card } from 'vant';
import { Popup } from 'vant';
import { Image } from 'vant';
import { Sticky } from 'vant';
import { Grid, GridItem } from 'vant';
import { List } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Button } from 'vant';
import { Field } from 'vant';
import { NumberKeyboard } from 'vant';


// Vue.use(axios);
// Vue.use(qs);
Vue.use(NumberKeyboard);
Vue.use(Field);
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(List);
Vue.use(Grid).use(GridItem);
Vue.use(Sticky);
Vue.use(Image);
Vue.use(Popup);
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
