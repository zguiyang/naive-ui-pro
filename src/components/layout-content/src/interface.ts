import type { LayoutContentProps } from 'naive-ui';
import type { ExtractPropTypes, PropType } from 'vue';

export const proLayoutContentProps = {
  contentProps: {
    type: Object as PropType<LayoutContentProps>,
    default: undefined,
  },
};

export type ProLayoutContentProps = ExtractPropTypes<
  typeof proLayoutContentProps
>;
