import { computed, h, toRef } from 'vue';

import type { ProLayoutProps } from './interface';

export function useLayoutData(props: ProLayoutProps) {
  const { logoUrl, layoutProps = {}, renderLogo } = props;
  const mergeLayoutPropsRef = computed(() => {
    if (props.layoutMode === 'top') {
      layoutProps.hasSider = false;
    } else {
      layoutProps.hasSider = true;
    }
    return layoutProps;
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
    mergeLayoutPropsRef,
    handleRenderLogo,
  };
}
