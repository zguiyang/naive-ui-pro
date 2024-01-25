import type { LayoutProps } from 'naive-ui';
import type { ExtractPropTypes, PropType, VNodeChild } from 'vue';

export enum LayoutMode {
  Side = 'side',
  Top = 'top',
  Mix = 'mix',
}
export const proLayoutProps = {
  title: {
    type: String,
    default: undefined,
  },
  logoUrl: {
    type: String,
    default: undefined,
  },
  layoutMode: {
    type: String as PropType<'side' | 'top' | 'mix'>,
    default: 'side',
  },
  layoutProps: {
    type: Object as PropType<LayoutProps>,
    default: undefined,
  },
  contentWidth: {
    type: String as PropType<'fixed' | 'fluid'>,
    default: 'fluid',
  },
  renderLogo: {
    type: Function as PropType<(collapsed: boolean) => VNodeChild>,
    default: undefined,
  },
};

export type ProLayoutProps = ExtractPropTypes<typeof proLayoutProps>;
