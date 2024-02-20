import { type RouteRecordRaw } from 'vue-router';

export const enDocRoutes = [
  // basic docs
  {
    path: 'introduction',
    component: () => import('../../document/introduction/enUS/index.md'),
  },
  {
    path: 'installation',
    component: () => import('../../document/installation/enUS/index.md'),
  },
  {
    path: 'common-issues',
    component: () => import('../../document/common-issues/enUS/index.md'),
  },
  {
    path: 'import-on-demand',
    component: () => import('../../document/import-on-demand/enUS/index.md'),
  },
  {
    path: 'customize-theme',
    component: () => import('../../document/customize-theme/enUS/index.md'),
  },
  {
    path: 'changelog',
    component: () => import('../../document/changelog/enUS/index.vue'),
  },
];

export const zhDocRoutes = [
  // basic docs
  {
    path: 'introduction',
    component: () => import('../../document/introduction/zhCN/index.md'),
  },
  {
    path: 'installation',
    component: () => import('../../document/installation/zhCN/index.md'),
  },
  {
    path: 'common-issues',
    component: () => import('../../document/common-issues/zhCN/index.md'),
  },
  {
    path: 'import-on-demand',
    component: () => import('../../document/import-on-demand/zhCN/index.md'),
  },
  {
    path: 'customize-theme',
    component: () => import('../../document/customize-theme/zhCN/index.md'),
  },
  {
    path: 'changelog',
    component: () => import('../../document/changelog/zhCN/index.vue'),
  },
];

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
