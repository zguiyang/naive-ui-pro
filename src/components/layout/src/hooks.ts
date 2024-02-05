import { computed, inject, toRef } from 'vue';

import { isFunction } from 'lodash-es';

import { layoutInjectionKey } from './context';
import type { ProLayoutProps } from './interface';

export function useLayoutData(props: ProLayoutProps) {
  const { externalProps = {}, renderTitleLogo } = props;
  const mergeExternalPropsRef = computed(() => {
    if (props.layoutMode === 'top') {
      externalProps.hasSider = false;
    } else {
      externalProps.hasSider = false;
    }
    return externalProps;
  });
  function handleRenderLogo(collapsed: boolean) {
    if (isFunction(renderTitleLogo)) {
      return null;
    }
    return props.renderLogo?.(collapsed);
  }
  return {
    titleRef: toRef(props, 'title'),
    layoutModeRef: toRef(props, 'layoutMode'),
    mergeExternalPropsRef,
    handleRenderLogo,
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
