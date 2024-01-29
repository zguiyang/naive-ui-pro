import type { LayoutProps } from 'naive-ui';
import type { ExtractPropTypes, PropType, VNodeChild } from 'vue';

import type { ProLayoutContentProps } from '../../layout-content';
import type { ProLayoutHeaderProps } from '../../layout-header';
import type { ProLayoutSidebarProps } from '../../layout-sidebar';

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
  headerProps: {
    type: Object as PropType<ProLayoutHeaderProps>,
  },
  contentProps: {
    type: Object as PropType<ProLayoutContentProps>,
  },
  sideProps: {
    type: Object as PropType<ProLayoutSidebarProps>,
  },
};

export type ProLayoutProps = ExtractPropTypes<typeof proLayoutProps>;
