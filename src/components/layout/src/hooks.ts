import { computed, toRef } from 'vue';

import { isFunction } from 'lodash-es';

import type { ProLayoutProps } from './interface';

export function useLayoutData(props: ProLayoutProps) {
  const { externalProps = {}, renderTitleLogo } = props;
  const mergeExternalPropsRef = computed(() => {
    if (props.layoutMode === 'top') {
      externalProps.hasSider = false;
    } else {
      externalProps.hasSider = true;
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
