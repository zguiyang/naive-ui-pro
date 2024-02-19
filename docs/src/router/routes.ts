import { type RouteRecordRaw } from 'vue-router';

export const enDocRoutes = [];

export const zhDocRoutes = [];

export const enComponentRoutes = [];

export const zhComponentRoutes = [];

export const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/:lang/:theme',
    component: async () => await import('../pages/home/index.vue'),
  },
  {
    name: 'enDocs',
    path: '/en-US/:theme/docs',
    component: async () => await import('../pages/Layout.vue'),
    children: enDocRoutes,
  },
  {
    name: 'zhDocs',
    path: '/zh-CN/:theme/docs',
    component: async () => await import('../pages/Layout.vue'),
    children: zhDocRoutes,
  },
  {
    name: 'enComponents',
    path: '/en-US/:theme/components',
    component: async () => await import('../pages/Layout.vue'),
    children: enComponentRoutes,
  },
  {
    name: 'zhComponents',
    path: '/zh-CN/:theme/components',
    component: async () => await import('../pages/Layout.vue'),
    children: zhComponentRoutes,
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home',
      params: {
        lang: navigator.language === 'zh-CN' ? 'zh-CN' : 'en-US',
        theme: 'os-theme',
      },
    },
  },
];
