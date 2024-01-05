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
    path: '/formulario',
    component: () => import('pages/FormularioPage.vue'),
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
    path: '/patients',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/registerPatient', name: 'Pacientes', component: () => import('pages/NewPatient.vue') },
    { path: '/table', component: () => import('pages/TablePage.vue'), meta: {requireLogin: true} },
    
    
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
