import { computed, inject, toRef } from 'vue';

import { layoutInjectionKey } from './context';
import type { ProLayoutProps } from './interface';

export function useLayoutData(props: ProLayoutProps) {
  const { layoutProps = {} } = props;
  const mergeExternalPropsRef = computed(() => {
    if (props.layoutMode === 'top') {
      layoutProps.hasSider = false;
    } else {
      layoutProps.hasSider = false;
    }
    return layoutProps;
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
