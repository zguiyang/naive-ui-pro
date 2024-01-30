import { defineComponent } from 'vue';
import type { ExtractPublicPropTypes, PropType } from 'vue';

import { NLayoutContent } from 'naive-ui';
import type { LayoutContentProps } from 'naive-ui';

import { useBemNamespace } from '../../../_utils';

export const proLayoutContentProps = {
  externalProps: {
    type: Object as PropType<LayoutContentProps>,
    default: undefined,
  },
};

export type ProLayoutContentProps = ExtractPublicPropTypes<
  typeof proLayoutContentProps
>;

const bem = useBemNamespace('layout-content');

export const ProLayoutContent = defineComponent({
  name: bem.name,
  props: proLayoutContentProps,
  setup() {
    return {};
  },
  render() {
    const { $slots } = this;
    return (
      <NLayoutContent {...this.$props.externalProps} class={[bem.b()]}>
        {$slots.default?.()}
      </NLayoutContent>
    );
  },
});
