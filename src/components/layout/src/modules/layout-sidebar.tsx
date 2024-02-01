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

    return {
      menuEXternalProps: LayoutProvide.menuPropsRef,
      titleRef: LayoutProvide.titleRef,
      widthRef: LayoutProvide.sidebarWidthRef,
      collapsedWidthRef: LayoutProvide.collapsedWidthRef,
      collapsedRef: LayoutProvide.collapsedRef,
      headerHeightRef: LayoutProvide.headerHeightRef,
      handleToggleCollapsed: LayoutProvide.handleToggleCollapsed,
    };
  },
  render() {
    const {
      menuEXternalProps,
      widthRef,
      collapsedWidthRef,
      collapsedRef,
      headerHeightRef,
      titleRef,
      handleToggleCollapsed,
    } = this;
    return (
      <NLayoutSider
        class={[bem.b()]}
        show-trigger={true}
        width={widthRef}
        collapseMode='width'
        collapsed-width={collapsedWidthRef}
        onUpdateCollapsed={handleToggleCollapsed}
        nativeScrollbar={true}>
        <div class={[bem.e('logo')]} style={{ height: headerHeightRef }}>
          Logo区域
          {titleRef}
        </div>
        <div
          class={[bem.e('menus')]}
          style={{ height: `calc(100vh - ${headerHeightRef})` }}>
          <NScrollbar>
            <NMenu
              collapsed={collapsedRef}
              collapsed-width={collapsedWidthRef}
              options={menuEXternalProps?.options}></NMenu>
          </NScrollbar>
        </div>
      </NLayoutSider>
    );
  },
});
