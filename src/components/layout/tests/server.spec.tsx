/**
 * @vitest-environment node
 */
import { createSSRApp } from 'vue';

import { renderToString } from '@vue/server-renderer';
import { describe, expect, it } from 'vitest';

import { ProLayout } from '..';

describe('pro-layout SSR', () => {
  it('works', async () => {
    const app = createSSRApp(() => <ProLayout />);
    try {
      await renderToString(app);
    } catch (e) {
      expect(e).not.toBeTruthy();
    }
  });
});
