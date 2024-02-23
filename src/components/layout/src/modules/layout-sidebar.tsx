import { computed, defineComponent } from 'vue';

import { NLayoutSider, NMenu, layoutSiderProps } from 'naive-ui';

import { pick } from 'lodash-es';

import { useBemNamespace } from '../../../_utils';
import { useLayoutProvide } from '../hooks';

const bem = useBemNamespace('layout-sidebar');

export const LayoutSidebar = defineComponent({
  name: bem.name,
  props: {
    ...pick(layoutSiderProps, [
      'width',
      'collapsed',
      'defaultCollapsed',
      'collapsedWidth',
      'onUpdateCollapsed',
    ]),
  },
  setup() {
    const { LayoutProvide } = useLayoutProvide();

    const sideExternalProps = LayoutProvide.sidePropsRef;

    return {
      menuEXternalProps: LayoutProvide.menuPropsRef,
      sideExternalProps: computed(() => {
        return Object.assign(
          {
            showTrigger: true,
            collapseMode: 'width',
            nativeScrollbar: true,
          },
          sideExternalProps.value ?? {}
        );
      }),
    };
  },
  render() {
    const { menuEXternalProps, sideExternalProps, onUpdateCollapsed } = this;
    return (
      <NLayoutSider
        class={[bem.b()]}
        {...sideExternalProps}
        position={'static'}
        width={this.width}
        collapsedWidth={this.collapsedWidth}
        defaultCollapsed={this.defaultCollapsed}
        collapsed={this.collapsed}
        onUpdateCollapsed={onUpdateCollapsed}>
        <div class={[bem.e('menus')]}>
          <NMenu
            {...menuEXternalProps}
            collapsed={this.collapsed}
            collapsedWidth={this.collapsedWidth}></NMenu>
        </div>
      </NLayoutSider>
    );
  },
});
