import { computed, defineComponent, provide, ref, toRef } from 'vue';

import { NLayout, NLayoutFooter } from 'naive-ui';

import { formatCssUnit, useBemNamespace } from '../../_utils';
import { layoutInjectionKey } from './context.ts';
import { useLayoutData } from './hooks.ts';
import { proLayoutProps } from './interface.ts';
import { LayoutContent } from './modules/layout-content.tsx';
import { LayoutHeader } from './modules/layout-header';
import { LayoutSidebar } from './modules/layout-sidebar';

const bem = useBemNamespace('layout');
const Layout = defineComponent({
  name: bem.name,
  props: proLayoutProps,
  setup(props) {
    const { titleRef, layoutModeRef, mergeExternalPropsRef } =
      useLayoutData(props);

    const headerHeightRef = ref(formatCssUnit(props.headerHeight));

    provide(layoutInjectionKey, {
      titleRef: toRef(props, 'title'),
      layoutModeRef: toRef(props, 'layoutMode'),
      headerHeightRef,
      menuPropsRef: computed(() => props.menuProps),
      headerProps: props.headerProps,
      contentProps: props.contentProps,
      sideProps: props.sideProps,
    });

    return {
      titleRef,
      layoutModeRef,
      mergeExternalPropsRef,
      headerHeight: headerHeightRef,
    };
  },
  render() {
    const { mergeExternalPropsRef, layoutModeRef, $slots } = this;

    if (layoutModeRef === 'side') {
      return (
        <NLayout
          class={[bem.b(), bem.m(this.layoutModeRef)]}
          {...mergeExternalPropsRef}
          position={'absolute'}>
          <LayoutSidebar></LayoutSidebar>
          <NLayout
            class={[bem.e('container-wrapper')]}
            position={'absolute'}
            style={{ marginLeft: '274px' }}>
            <LayoutHeader></LayoutHeader>
            <NLayout
              class={[bem.e('content')]}
              position={'absolute'}
              style={{
                top: this.headerHeight,
              }}>
              <LayoutContent>{$slots.default?.()}</LayoutContent>
              <NLayoutFooter class={[bem.e('footer')]} position='absolute'>
                页脚区域
              </NLayoutFooter>
            </NLayout>
          </NLayout>
        </NLayout>
      );
    } else if (layoutModeRef === 'top') {
      return <NLayout>top顶部布局</NLayout>;
    } else {
      return <NLayout>mix混合布局</NLayout>;
    }
  },
});
export default Layout;
