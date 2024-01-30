import { defineComponent } from 'vue';
import type { ExtractPublicPropTypes, PropType } from 'vue';

import { NLayoutSider } from 'naive-ui';
import type { LayoutSiderProps } from 'naive-ui';

import { useBemNamespace } from '../../../_utils';

export const proLayoutSidebarProps = {
  externalProps: {
    type: Object as PropType<LayoutSiderProps>,
    default: undefined,
  },
};

export type ProLayoutSidebarProps = ExtractPublicPropTypes<
  typeof proLayoutSidebarProps
>;

const bem = useBemNamespace('layout-sidebar');

export const ProLayoutSidebar = defineComponent({
  name: bem.name,
  props: proLayoutSidebarProps,
  setup() {},
  render() {
    const { $slots } = this;

    return (
      <NLayoutSider class={[bem.b()]} {...this.$props.externalProps}>
        {$slots.default?.()}
      </NLayoutSider>
    );
  },
});
