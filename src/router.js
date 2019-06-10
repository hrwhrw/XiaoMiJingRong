import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Dingqi from './views/Dingqi';
import Zongbanbao from './views/Zongbanbao';
import Jingxuan from './views/Jingxuan';
import Denglu from './views/Denglu';
Vue.use(Router);

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Dingqi',
      name: 'Dingqi',
      component: Dingqi,
      // component: () => import('./views/Dingqi.vue'),
    },
    {
      path: '/Zongbanbao',
      name: 'Zongbanbao',
      component: Zongbanbao,
    },
    {
      path: '/Jingxuan',
      name: 'Jingxuan',
      component: Jingxuan,
    },
    {
      path: '/Denglu',
      name: 'Denglu',
      component: Denglu,
    },
  ],
});
