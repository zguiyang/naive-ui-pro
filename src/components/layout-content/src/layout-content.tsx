import { NLayoutContent } from 'naive-ui';
import { defineComponent } from 'vue';

import { useBemNamespace } from '../../_utils';
import { proLayoutContentProps } from './interface';

const bem = useBemNamespace('layout-content');

export default defineComponent({
  name: bem.name,
  props: proLayoutContentProps,
  setup() {
    return {};
  },
  render() {
    const { $slots } = this;
    return (
      <NLayoutContent {...this.$props.contentProps} class={[bem.b()]}>
        {$slots.default?.()}
      </NLayoutContent>
    );
  },
});
