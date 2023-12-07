import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
  },
  {

    path: '/register',
    component: () => import('pages/RegisterPage.vue'),
  },
  {

    path: '/recuperar',
    component: () => import('pages/RecuperarPass.vue'),
  },

  {
    path: '/patient',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NewPatient.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
