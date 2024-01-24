import { resolve } from 'path';
import type { UserConfigExport } from 'vite';

export default (): UserConfigExport => {
  return {
    build: {
      outDir: resolve(__dirname, 'dist/styles'),
      emptyOutDir: false,
      rollupOptions: {
        input: resolve(__dirname, 'src', 'styles', 'index.scss'),
        output: {
          assetFileNames: '[name].[ext]',
        },
      },
    },
  };
};
