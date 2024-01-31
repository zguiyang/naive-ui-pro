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
    };
  },
  render() {
    const { menuEXternalProps } = this;
    return (
      <NLayoutSider {...this.$props} class={[bem.b()]} show-trigger={true}>
        <div class={[bem.e('logo')]} style={{ height: '64px' }}>
          Logo区域
        </div>
        <div class={[bem.e('menus')]} style={{ height: 'calc(100vh - 64px)' }}>
          <NScrollbar style='height: 100%;'>
            <NMenu options={menuEXternalProps?.options}></NMenu>
            <NMenu options={menuEXternalProps?.options}></NMenu>
            <NMenu options={menuEXternalProps?.options}></NMenu>
            <NMenu options={menuEXternalProps?.options}></NMenu>
            <NMenu options={menuEXternalProps?.options}></NMenu>
            <NMenu options={menuEXternalProps?.options}></NMenu>
            <NMenu options={menuEXternalProps?.options}></NMenu>
            <NMenu options={menuEXternalProps?.options}></NMenu>
            <NMenu options={menuEXternalProps?.options}></NMenu>
            <NMenu options={menuEXternalProps?.options}></NMenu>
          </NScrollbar>
        </div>
      </NLayoutSider>
    );
  },
});
