// import vue from '@vitejs/plugin-vue';
// import vueJsx from '@vitejs/plugin-vue-jsx';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const createDemoPlugin = require('./build/vite-plugin-demo');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createDemoPlugin(),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: true,
    }),
  ],
  define: {
    __DEV__: process.env.NODE_ENV !== 'production',
  },
});
