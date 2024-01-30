import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';

import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    jsx(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      outDir: ['dist/esm', 'dist/lib'],
      tsconfigPath: './tsconfig.json',
      compilerOptions: {
        sourceMap: false,
      },
      staticImport: false,
      copyDtsFiles: true,
    }),
  ],
  resolve: {
    alias: {},
  },
  define: {
    __DEV__: 'process.env.NODE_ENV !== "production"',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'NaiveUiPro',
      fileName: 'naive-ui-pro',
    },
    rollupOptions: {
      external: [
        'vue',
        'naive-ui',
        'lodash-es',
        'css-render',
        '@css-render/plugin-bem',
      ],
      treeshake: false,
      output: [
        {
          format: 'es',
          exports: 'named',
          entryFileNames: '[name].js',
          dir: 'dist/esm',
          sourcemap: false,
          // preserveModulesRoot: './packages/naive-ui-pro',
          preserveModules: true,
          globals: {
            vue: 'Vue',
            __DEV__: '__DEV__',
          },
        },
        {
          format: 'cjs',
          exports: 'named',
          entryFileNames: '[name].js',
          dir: 'dist/lib',
          sourcemap: false,
          // preserveModulesRoot: './packages/naive-ui-pro',
          preserveModules: true,
          globals: {
            vue: 'Vue',
            __DEV__: '__DEV__',
          },
        },
      ],
    },
  },
});
