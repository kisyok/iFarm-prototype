import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard';
import Tables from '@/pages/Tables/Basic'
import Notifications from '@/pages/Notifications/Notifications'
import Icons from '@/pages/Icons/Icons'
import Charts from '@/pages/Charts/Charts'
import Maps from '@/pages/Maps/Google'
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";
import Aerating from '@/pages/Prototypes/Aerating'
import Sowing from '@/pages/Prototypes/Sowing'
import Fertilizing from '@/pages/Prototypes/Fertilizing'
import Harvest from '@/pages/Prototypes/Harvest'
import Others from '@/pages/Prototypes/Others'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    path: '/',
    redirect: 'login',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'aerating',
        name: 'Aerating',
        component: Aerating,
      },
      {
        path: 'sowing',
        name: 'Sowing',
        component: Sowing,
      },
      {
        path: 'fertilizing',
        name: 'Fertilizing',
        component: Fertilizing,
      },
      {
        path: 'harvest',
        name: 'Harvest',
        component: Harvest,
      },
      {
        path: 'others',
        name: 'Others',
        component: Others,
      },
      {
        path: 'tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
    ],
  },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
