import { nextTick } from 'vue';
import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from 'vue-router';

export const loadingBarApiRef: any = {};

export default function createDemoRouter(routes: RouteRecordRaw[]) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach(function (to, from, next) {
    if (!from || to.path !== from.path) {
      if (loadingBarApiRef.value) {
        loadingBarApiRef.value.start();
      }
    }
    next();
  });

  router.afterEach(function (to, from) {
    if (!from || to.path !== from.path) {
      if (loadingBarApiRef.value) {
        loadingBarApiRef.value.finish();
      }
      if (to.hash && to.hash !== from.hash) {
        void nextTick(() => {
          const el = document.querySelector(to.hash);
          if (el) el.scrollIntoView();
        });
      }
    }
  });

  return router;
}
