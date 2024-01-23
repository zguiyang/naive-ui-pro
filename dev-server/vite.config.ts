import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'naive-ui-pro': resolve(__dirname, '../src'),
    },
  },
});
