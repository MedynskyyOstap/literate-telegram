import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('src/layouts/Layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/PageTodo.vue') 
      },
      { 
        path: '/settings', 
        component: () => import('pages/PageSettings.vue') 
      },
      // { 
      //   path: '', 
      //   component: () => import('pages/PageTodo.vue') 
      // }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
