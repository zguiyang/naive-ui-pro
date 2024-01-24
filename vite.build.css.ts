import { readdirSync } from 'fs';
import { resolve } from 'path';
import type { UserConfigExport } from 'vite';

const input: string = resolve(__dirname, 'src', 'styles');

export default (): UserConfigExport => {
  return {
    build: {
      assetsDir: 'dist/styles',
      rollupOptions: {
        input: readdirSync(input).map((name): string => {
          console.log(input, name);
          return `${input}/${name}`;
        }),
        output: {
          entryFileNames: 'styles/[name].js',
          chunkFileNames: 'styles/[name].js',
          assetFileNames: 'styles/[name].[ext]',
        },
      },
    },
  };
};
