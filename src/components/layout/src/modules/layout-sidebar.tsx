import { defineComponent, ref } from 'vue';

import { NLayoutSider, NMenu, layoutSiderProps } from 'naive-ui';

import { useMergedState } from 'vooks';

import { useBemNamespace } from '../../../_utils';
import { useLayoutProvide } from '../hooks';

const bem = useBemNamespace('layout-sidebar');

export const LayoutSidebar = defineComponent({
  name: bem.name,
  props: layoutSiderProps,
  setup() {
    const { LayoutProvide } = useLayoutProvide();

    const sideExternalProps = LayoutProvide.sidePropsRef;

    const mergedCollapsedRef = useMergedState(
      ref(sideExternalProps.value?.collapsed),
      LayoutProvide.provideCollapsedRef
    );

    return {
      menuEXternalProps: LayoutProvide.menuPropsRef,
      sideExternalProps: LayoutProvide.sidePropsRef,
      mergedCollapsed: mergedCollapsedRef,
      handleToggleCollapsed: LayoutProvide.handleToggleCollapsed,
    };
  },
  render() {
    const {
      menuEXternalProps,
      sideExternalProps,
      mergedCollapsed,
      handleToggleCollapsed,
    } = this;
    return (
      <NLayoutSider
        class={[bem.b()]}
        showTrigger={true}
        collapseMode={'width'}
        {...sideExternalProps}
        collapsed={mergedCollapsed}
        onUpdateCollapsed={handleToggleCollapsed}
        nativeScrollbar={true}>
        <div class={[bem.e('menus')]}>
          <NMenu collapsed={mergedCollapsed} {...menuEXternalProps}></NMenu>
        </div>
      </NLayoutSider>
    );
  },
});
