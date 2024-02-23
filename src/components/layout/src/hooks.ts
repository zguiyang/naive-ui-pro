import { computed, inject, toRef } from 'vue';

import { cloneDeep, omit } from 'lodash-es';

import { layoutInjectionKey } from './context';
import type { ProLayoutProps } from './interface';

export function useLayoutData(props: ProLayoutProps) {
  const { layoutProps = {} } = props;
  const mergeExternalPropsRef = computed(() => {
    const _layoutProps = cloneDeep(layoutProps);

    return omit(_layoutProps, ['hasSider', 'siderPlacement', 'position']);
  });

  return {
    titleRef: toRef(props, 'title'),
    layoutModeRef: toRef(props, 'layoutMode'),
    mergeExternalPropsRef,
  };
}

export function useLayoutProvide() {
  const LayoutProvide = inject(layoutInjectionKey);

  if (LayoutProvide === null || LayoutProvide === undefined) {
    throw new Error('LayoutProvide is undefined');
  }

  return {
    LayoutProvide,
  };
}
