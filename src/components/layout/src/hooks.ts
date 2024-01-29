import { computed, h, toRef } from 'vue';

import type { ProLayoutProps } from './interface';

export function useLayoutData(props: ProLayoutProps) {
  const { logoUrl, externalProps = {}, renderLogo } = props;
  const mergeExternalPropsRef = computed(() => {
    if (props.layoutMode === 'top') {
      externalProps.hasSider = false;
    } else {
      externalProps.hasSider = true;
    }
    return externalProps;
  });
  function handleRenderLogo(collapsed: boolean) {
    if (renderLogo === undefined || renderLogo === null) {
      return h('img', {
        src: logoUrl,
        class: 'logo-img',
      });
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
