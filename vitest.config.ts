import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue(), jsx()],
  test: {
    include: ['./src/**/tests/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'happy-dom',
  },
});
