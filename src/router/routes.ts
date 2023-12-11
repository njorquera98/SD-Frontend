import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
  },
  {
    path: '/cambiar',
    component: () => import('pages/CambioPass.vue'),
  },
  {

    path: '/register',
    component: () => import('pages/RegisterPage.vue'),
  },
  {
    path: '/espera',
    component: () => import('pages/EsperarCodigo.vue'),
  },
  {

    path: '/recuperar',
    component: () => import('pages/RecuperarPass.vue'),
  },
  {

    path: '/tabla',
    component: () => import('pages/TablePage.vue'),
  },

  {
    path: '/patient',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NewPatient.vue') },
    { path: 'table', component: () => import('pages/TablePage.vue') },
    
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
