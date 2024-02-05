import { defineComponent } from 'vue';

import { NLayoutSider, NMenu, layoutSiderProps } from 'naive-ui';

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
      widthRef: LayoutProvide.sidebarWidthRef,
      collapsedWidthRef: LayoutProvide.collapsedWidthRef,
      collapsedRef,
      handleToggleCollapsed: LayoutProvide.handleToggleCollapsed,
    };
  },
  render() {
    const {
      menuEXternalProps,
      sideExternalProps,
      widthRef,
      collapsedWidthRef,
      collapsedRef,
      handleToggleCollapsed,
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
        <div class={[bem.e('menus')]}>
          <NMenu
            {...menuEXternalProps}
            collapsed={collapsedRef}
            collapsed-width={collapsedWidthRef}></NMenu>
        </div>
      </NLayoutSider>
    );
  },
});
