import type { LayoutHeaderProps } from 'naive-ui';
import type { ExtractPropTypes, PropType, VNodeChild } from 'vue';

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

export type ProLayoutHeaderProps = ExtractPropTypes<
  typeof proLayoutHeaderProps
>;
