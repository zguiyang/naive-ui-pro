import { NLayoutSider } from 'naive-ui';
import { defineComponent } from 'vue';

import { useBemNamespace } from '../../_utils';
import { proLayoutSidebarProps } from './interface';

const bem = useBemNamespace('layout-sidebar');

export default defineComponent({
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
