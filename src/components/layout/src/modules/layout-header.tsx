import { defineComponent } from 'vue';
import type { ExtractPublicPropTypes, PropType, VNodeChild } from 'vue';

import { NLayoutHeader } from 'naive-ui';
import type { LayoutHeaderProps } from 'naive-ui';

import { useBemNamespace } from '../../../_utils';

export const proLayoutHeaderProps = {
  externalProps: {
    type: Object as PropType<LayoutHeaderProps>,
    default: undefined,
  },
  title: {
    type: String,
    default: undefined,
  },
  renderLogo: {
    type: Function as PropType<() => VNodeChild>,
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: undefined,
  },
};

export type ProLayoutHeaderProps = ExtractPublicPropTypes<
  typeof proLayoutHeaderProps
>;

const bem = useBemNamespace('layout-header');

export const LayoutHeader = defineComponent({
  name: bem.name,
  props: proLayoutHeaderProps,
  setup() {},
  render() {
    const { $slots } = this;

    return (
      <NLayoutHeader {...this.$props.externalProps} class={[bem.b()]}>
        {$slots.default?.()}
      </NLayoutHeader>
    );
  },
});
