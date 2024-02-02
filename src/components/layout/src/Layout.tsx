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

    const headerHeightRef = computed(() => formatCssUnit(props.headerHeight));
    const collapsedRef = ref(false);

    function handleToggleCollapsed(collapsed: boolean) {
      collapsedRef.value = collapsed;
    }

    provide(layoutInjectionKey, {
      collapsedRef,
      headerHeightRef,
      sidebarWidthRef: computed(() => props.sidebarWidth),
      collapsedWidthRef: computed(() => props.collapsedWidth),
      titleRef: toRef(props, 'title'),
      layoutModeRef: computed(() => props.layoutMode),
      menuPropsRef: computed(() => props.menuProps),
      headerPropsRef: computed(() => props.headerProps),
      contentPropsRef: computed(() => props.contentProps),
      sidePropsRef: computed(() => props.sideProps),
      contentWidthRef: computed(() => props.contentWidth),
      handleToggleCollapsed,
      handleRenderLogo: props.renderLogo,
      handleRenderTitleLogo: props.renderTitleLogo,
    });

    return {
      titleRef,
      layoutModeRef,
      mergeExternalPropsRef,
      collapsedRef,
      sidebarWidthRef: ref(formatCssUnit(props.sidebarWidth)),
      collapsedWidthRef: ref(formatCssUnit(props.collapsedWidth)),
      headerHeight: headerHeightRef,
    };
  },
  render() {
    const { $slots, mergeExternalPropsRef, layoutModeRef, collapsedRef } = this;

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
            style={{
              marginLeft: collapsedRef
                ? this.collapsedWidthRef
                : this.sidebarWidthRef,
            }}>
            <LayoutHeader>{$slots}</LayoutHeader>
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
    } else {
      return (
        <NLayout
          class={[bem.b(), bem.m(this.layoutModeRef)]}
          {...mergeExternalPropsRef}
          position='absolute'>
          <LayoutHeader>{$slots}</LayoutHeader>
          <NLayout
            class={[bem.e('container-wrapper')]}
            style={{ top: this.headerHeight, bottom: '48px' }}
            position='absolute'>
            <LayoutContent>{$slots.default?.()}</LayoutContent>
          </NLayout>
          <NLayoutFooter class={[bem.e('footer')]} position='absolute'>
            页脚区域
          </NLayoutFooter>
        </NLayout>
      );
    }
  },
});
export default Layout;
