import { createInjectionKey } from '../../_utils';
import type { ProLayoutInjection } from './interface';

export const layoutInjectionKey =
  createInjectionKey<ProLayoutInjection>('pro-layout');
