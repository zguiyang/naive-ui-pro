// import vue from '@vitejs/plugin-vue';
import { SOURCE_DIR_PATH } from '@naive-ui-pro/build-utils';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const createDemoPlugin = require('./build/vite-plugin-demo');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createDemoPlugin(),
    vueJsx(),
    Components({
      resolvers: [
        componentName => {
          if (componentName.match(/^(Pro[A-Z]|pro-[a-z])/)) {
            return { name: componentName, from: 'naive-ui-pro' };
          }
        },
      ],
      dts: true,
    }),
  ],
  resolve: {
    alias:
      process.env.NODE_ENV === 'development'
        ? [
            {
              find: /^naive-ui-pro\/(.*)/,
              replacement: path.resolve(SOURCE_DIR_PATH, '$1'),
            },
            {
              find: /^naive-ui-pro$/,
              replacement: path.resolve(SOURCE_DIR_PATH, 'index.ts'),
            },
          ]
        : [],
  },
  server: {
    port: 3002,
  },
  define: {
    __DEV__: process.env.NODE_ENV !== 'production',
  },
});
