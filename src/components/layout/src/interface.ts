import type { ExtractPropTypes, PropType, VNodeChild } from 'vue';

import type {
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutProps,
  LayoutSiderProps,
} from 'naive-ui';

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
  layoutMode: {
    type: String as PropType<'side' | 'top' | 'mix'>,
    default: 'side',
  },
  externalProps: {
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
  renderTitleLogo: {
    type: Function as PropType<(collapsed: boolean) => VNodeChild>,
    default: undefined,
  },
  headerProps: {
    type: Object as PropType<LayoutHeaderProps>,
  },
  contentProps: {
    type: Object as PropType<LayoutContentProps>,
  },
  sideProps: {
    type: Object as PropType<LayoutSiderProps>,
  },
  footerProps: {
    type: Object as PropType<LayoutFooterProps>,
  },
};

export type ProLayoutProps = ExtractPropTypes<typeof proLayoutProps>;
