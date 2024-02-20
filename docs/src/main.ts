import { Plugin, createApp } from 'vue';

import naive, { NThemeEditor } from 'naive-ui';

import SiteRoot from './App.vue';
import createDemoRouter from './router/router';
import { routes } from './router/routes';
import { installDemoComponents } from './setup';

const app = createApp(SiteRoot);

const router = createDemoRouter(routes);

app.use(router);
app.use(naive as Plugin);
app.component('NThemeEditor', NThemeEditor);
installDemoComponents(app);

void router.isReady().then(() => {
  app.mount('#app');
});
