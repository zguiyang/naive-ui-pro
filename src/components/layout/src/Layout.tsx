import { computed, defineComponent, provide, ref, toRef } from 'vue';

import { NLayout, NLayoutFooter } from 'naive-ui';

import { useMergedState } from 'vooks';

import { formatCssUnit, useBemNamespace } from '../../_utils';
import { call } from '../../_utils/vue';
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

    const internalCollapsedRef = ref(props.defaultCollapsed);
    const mergedCollapsedRef = useMergedState(
      toRef(props, 'collapsed'),
      internalCollapsedRef
    );

    function doUpdateCollapsed(collapsed: boolean) {
      const { onUpdateCollapsed, 'onUpdate:collapsed': _onUpdateCollapsed } =
        props;

      internalCollapsedRef.value = collapsed;
      onUpdateCollapsed && call(onUpdateCollapsed, collapsed);
      _onUpdateCollapsed && call(_onUpdateCollapsed, collapsed);
    }

    provide(layoutInjectionKey, {
      headerHeightRef,
      layoutModeRef,
      menuPropsRef: computed(() => props.menuProps),
      headerPropsRef: computed(() => props.headerProps),
      contentPropsRef: computed(() => props.contentProps),
      sidePropsRef: computed(() => props.sideProps),
      contentWidthRef: computed(() => props.contentWidth),
    });

    return {
      titleRef,
      layoutModeRef,
      mergeExternalPropsRef,
      headerHeight: headerHeightRef,
      collapsed: mergedCollapsedRef,
      defaultCollapsed: toRef(props, 'defaultCollapsed'),
      collapsedWidth: toRef(props, 'collapsedWidth'),
      sideBarWidth: toRef(props, 'sideBarWidth'),
      handleToggleCollapsed: doUpdateCollapsed,
    };
  },
  render() {
    const {
      $slots,
      titleRef,
      headerHeight,
      mergeExternalPropsRef,
      layoutModeRef,
      collapsed,
      defaultCollapsed,
      collapsedWidth,
      sideBarWidth,
      handleToggleCollapsed,
    } = this;

    if (layoutModeRef === 'side') {
      return (
        <NLayout
          class={[bem.b(), bem.m(this.layoutModeRef)]}
          {...mergeExternalPropsRef}
          position={'absolute'}>
          <LayoutHeader
            title={titleRef}
            height={headerHeight}
            renderLogo={this.renderLogo}
            renderTitleLogo={this.renderTitleLogo}>
            {$slots}
          </LayoutHeader>
          <NLayout
            class={[bem.e('container-wrapper')]}
            position={'absolute'}
            has-sider={true}
            style={{
              top: this.headerHeight,
            }}>
            <LayoutSidebar
              width={sideBarWidth}
              collapsed={collapsed}
              defaultCollapsed={defaultCollapsed}
              collapsed-width={collapsedWidth}
              onUpdateCollapsed={handleToggleCollapsed}></LayoutSidebar>
            <NLayout class={[bem.e('content')]}>
              <LayoutContent>{$slots.default?.()}</LayoutContent>
              <NLayoutFooter class={[bem.e('footer')]} position='absolute'>
                {this.copyRightText}
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
          <LayoutHeader
            title={titleRef}
            height={headerHeight}
            renderLogo={this.renderLogo}
            renderTitleLogo={this.renderTitleLogo}>
            {$slots}
          </LayoutHeader>
          <NLayout
            class={[bem.e('container-wrapper')]}
            style={{ top: this.headerHeight, bottom: '48px' }}
            position='absolute'>
            <LayoutContent>{$slots.default?.()}</LayoutContent>
          </NLayout>
          <NLayoutFooter class={[bem.e('footer')]} position='absolute'>
            {this.copyRightText}
          </NLayoutFooter>
        </NLayout>
      );
    }
  },
});
export default Layout;
