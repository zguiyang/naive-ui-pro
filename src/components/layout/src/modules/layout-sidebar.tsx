import { defineComponent } from 'vue';

import { NLayoutSider, NMenu, NScrollbar, layoutSiderProps } from 'naive-ui';

import { useBemNamespace } from '../../../_utils';
import { useLayoutProvide } from '../hooks';

const bem = useBemNamespace('layout-sidebar');

export const LayoutSidebar = defineComponent({
  name: bem.name,
  props: layoutSiderProps,
  setup() {
    const { LayoutProvide } = useLayoutProvide();

    const collapsedRef = LayoutProvide.collapsedRef;

    return {
      menuEXternalProps: LayoutProvide.menuPropsRef,
      sideExternalProps: LayoutProvide.sidePropsRef,
      titleRef: LayoutProvide.titleRef,
      widthRef: LayoutProvide.sidebarWidthRef,
      collapsedWidthRef: LayoutProvide.collapsedWidthRef,
      collapsedRef,
      headerHeightRef: LayoutProvide.headerHeightRef,
      handleToggleCollapsed: LayoutProvide.handleToggleCollapsed,
      renderLogo: LayoutProvide.handleRenderLogo,
      renderTitleLogo: LayoutProvide.handleRenderTitleLogo,
    };
  },
  render() {
    const {
      menuEXternalProps,
      sideExternalProps,
      widthRef,
      collapsedWidthRef,
      collapsedRef,
      headerHeightRef,
      titleRef,
      handleToggleCollapsed,
      renderLogo,
      renderTitleLogo,
    } = this;
    return (
      <NLayoutSider
        class={[bem.b()]}
        showTrigger={true}
        {...sideExternalProps}
        collapseMode={'width'}
        width={widthRef}
        collapsed-width={collapsedWidthRef}
        onUpdateCollapsed={handleToggleCollapsed}
        nativeScrollbar={true}>
        <div
          class={[bem.e('logo-wrapper')]}
          style={{ height: headerHeightRef }}>
          {renderTitleLogo ? (
            renderTitleLogo(collapsedRef)
          ) : (
            <>
              {renderLogo ? (
                <div
                  class={[bem.e('logo')]}
                  style={{ marginRight: collapsedRef ? 0 : '12px' }}>
                  {renderLogo(collapsedRef)}
                </div>
              ) : null}
              {collapsedRef ? null : (
                <span class={[bem.e('title')]}>{titleRef}</span>
              )}
            </>
          )}
        </div>
        <div
          class={[bem.e('menus')]}
          style={{ height: `calc(100vh - ${headerHeightRef})` }}>
          <NScrollbar>
            <NMenu
              {...menuEXternalProps}
              collapsed={collapsedRef}
              collapsed-width={collapsedWidthRef}></NMenu>
          </NScrollbar>
        </div>
      </NLayoutSider>
    );
  },
});
