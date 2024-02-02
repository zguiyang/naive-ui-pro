import { defineComponent } from 'vue';

import { NLayoutContent, layoutContentProps } from 'naive-ui';

import { useBemNamespace } from '../../../_utils';
import { useLayoutProvide } from '../hooks';

const bem = useBemNamespace('layout-content');

export const LayoutContent = defineComponent({
  name: bem.name,
  props: layoutContentProps,
  setup() {
    const { LayoutProvide } = useLayoutProvide();
    return {
      contentWidthRef: LayoutProvide.contentWidthRef,
    };
  },
  render() {
    const { $slots, contentWidthRef } = this;
    return (
      <NLayoutContent
        {...this.$props}
        class={[bem.b(), bem.m(contentWidthRef)]}>
        {$slots.default?.()}
      </NLayoutContent>
    );
  },
});
