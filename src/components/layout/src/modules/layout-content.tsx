import { defineComponent } from 'vue';

import { NLayoutContent, layoutContentProps } from 'naive-ui';

import { useBemNamespace } from '../../../_utils';

const bem = useBemNamespace('layout-content');

export const LayoutContent = defineComponent({
  name: bem.name,
  props: layoutContentProps,
  setup() {
    return {};
  },
  render() {
    const { $slots } = this;
    return (
      <NLayoutContent {...this.$props} class={[bem.b()]}>
        {$slots.default?.()}
      </NLayoutContent>
    );
  },
});
