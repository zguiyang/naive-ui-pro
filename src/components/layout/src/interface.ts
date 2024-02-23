import type {
  ComputedRef,
  ExtractPropTypes,
  PropType,
  Ref,
  VNodeChild,
} from 'vue';

import type {
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutProps,
  LayoutSiderProps,
  MenuProps,
} from 'naive-ui';

import { MaybeArray } from '../../_utils/vue';

export const proLayoutProps = {
  title: {
    type: String,
    default: undefined,
  },
  layoutMode: {
    type: String as PropType<'side' | 'top'>,
    default: 'side',
  },
  contentWidth: {
    type: String as PropType<'fixed' | 'fluid'>,
    default: 'fluid',
  },
  headerHeight: {
    type: [String, Number] as PropType<string | number>,
    default: 60,
  },
  sideBarWidth: {
    type: [String, Number] as PropType<string | number>,
    default: 248,
  },
  collapsedWidth: {
    type: [String, Number] as PropType<string | number>,
    default: 60,
  },
  collapsed: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined,
  },
  defaultCollapsed: Boolean,
  // splitMenus: Boolean,
  copyRightText: String,
  renderLogo: {
    type: Function as PropType<() => VNodeChild>,
    default: undefined,
  },
  renderTitleLogo: {
    type: Function as PropType<() => VNodeChild>,
    default: undefined,
  },
  layoutProps: {
    type: Object as PropType<
      Omit<LayoutProps, 'hasSider' | 'siderPlacement' | 'position'>
    >,
    default: undefined,
  },
  menuProps: {
    type: Object as PropType<Omit<MenuProps, 'collapsed' | 'collapsedWidth'>>,
  },
  headerProps: {
    type: Object as PropType<Omit<LayoutHeaderProps, 'bordered' | 'position'>>,
  },
  contentProps: {
    type: Object as PropType<LayoutContentProps>,
  },
  sideProps: {
    type: Object as PropType<
      Omit<
        LayoutSiderProps,
        | 'collapsed'
        | 'defaultCollapsed'
        | 'onUpdateCollapsed'
        | 'onUpdate:collapsed'
        | 'width'
        | 'collapsedWidth'
        | 'position'
      >
    >,
  },
  footerProps: {
    type: Object as PropType<Omit<LayoutFooterProps, 'position'>>,
  },
  'onUpdate:collapsed': [Function, Array] as PropType<
    MaybeArray<(value: boolean) => void>
  >,
  onUpdateCollapsed: [Function, Array] as PropType<
    MaybeArray<(value: boolean) => void>
  >,
};

export type ProLayoutProps = ExtractPropTypes<typeof proLayoutProps>;

export interface ProLayoutInjection {
  menuPropsRef: ComputedRef<ProLayoutProps['menuProps']>;
  headerPropsRef: ComputedRef<ProLayoutProps['headerProps']>;
  contentPropsRef: ComputedRef<ProLayoutProps['contentProps']>;
  sidePropsRef: ComputedRef<ProLayoutProps['sideProps']>;
  layoutModeRef: Ref<'side' | 'top'>;
  headerHeightRef: ComputedRef<string>;
  contentWidthRef: ComputedRef<'fixed' | 'fluid'>;
}
