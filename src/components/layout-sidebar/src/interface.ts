import type { LayoutSiderProps } from 'naive-ui';
import type { ExtractPropTypes, PropType } from 'vue';

export const proLayoutSidebarProps = {
  sideProps: {
    type: Object as PropType<LayoutSiderProps>,
    default: undefined,
  },
};

export type ProLayoutSidebarProps = ExtractPropTypes<
  typeof proLayoutSidebarProps
>;
