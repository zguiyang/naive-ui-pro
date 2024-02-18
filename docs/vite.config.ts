import i18n from '@intlify/unplugin-vue-i18n/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import autoprefixer from 'autoprefixer';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import discardCss from 'postcss-discard-duplicates';
import { defineConfig } from 'vite';
import type { ConfigEnv, UserConfigExport } from 'vite';
import inspect from 'vite-plugin-inspect';

import { demoImports } from './.vitepress/build/plugins/demo-import';

const pkg = JSON.parse(
  readFileSync(resolve(__dirname, '../package.json'), 'utf-8')
);

export default defineConfig(({ command }: ConfigEnv): any => {
  const isServe = command === 'serve';

  const config: UserConfigExport = {
    define: {
      __ROLLBACK_LANG__: JSON.stringify('zh-CN'),
      __VERSION__: JSON.stringify(pkg.version || ''),
    },
    resolve: {
      alias: [
        { find: /^@docs\/(.+)/, replacement: resolve(__dirname, '$1') },
        {
          find: /^@vp\/(.+)/,
          replacement: resolve(__dirname, '.vitepress/$1'),
        },
        { find: /^@\/(.+)/, replacement: resolve(__dirname, '../$1') },
        {
          find: /^naive-ui-pro$/,
          replacement: resolve(__dirname, '../src/index.ts'),
        },
      ],
      dedupe: isServe ? ['../src/components', 'vue'] : ['vue'],
    },
    optimizeDeps: {
      include: [],
    },
    esbuild: {
      drop: isServe ? undefined : ['debugger'],
      pure: isServe ? undefined : ['console.log'],
    },
    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 10 * 1024,
    },
    ssr: {
      noExternal: ['vue-i18n', 'prismjs'],
    },
    css: {
      postcss: {
        plugins: [autoprefixer, ...(isServe ? [] : [discardCss])],
      },
    },
    plugins: [
      vueJsx(),
      i18n({ include: resolve(__dirname, './vitepress/i18n') }),
      inspect(),
      demoImports(),
    ],
  };

  return config;
});
