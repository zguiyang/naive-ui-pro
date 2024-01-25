import { NLayoutHeader } from 'naive-ui';
import { defineComponent } from 'vue';

import { useBemNamespace } from '../../_utils';
import { proLayoutHeaderProps } from './interface';

const bem = useBemNamespace('layout-header');

export default defineComponent({
  name: bem.name,
  props: proLayoutHeaderProps,
  setup() {},
  render() {
    const { $slots } = this;

    return (
      <NLayoutHeader {...this.$props.headerProps} class={[bem.b()]}>
        {$slots.default?.()}
      </NLayoutHeader>
    );
  },
});
