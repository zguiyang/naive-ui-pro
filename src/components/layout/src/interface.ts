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

export const proLayoutProps = {
  title: {
    type: String,
    default: undefined,
  },
  layoutMode: {
    type: String as PropType<'side' | 'top' | 'mix'>,
    default: 'side',
  },
  sidebarWidth: {
    type: [String, Number] as PropType<string | number>,
    default: 272,
  },
  collapsedWidth: {
    type: Number,
    default: 60,
  },
  externalProps: {
    type: Object as PropType<LayoutProps>,
    default: undefined,
  },
  contentWidth: {
    type: String as PropType<'fixed' | 'fluid'>,
    default: 'fluid',
  },
  headerHeight: {
    type: [String, Number] as PropType<string | number>,
    default: 60,
  },
  renderLogo: {
    type: Function as PropType<(collapsed: boolean) => VNodeChild>,
    default: undefined,
  },
  renderTitleLogo: {
    type: Function as PropType<(collapsed: boolean) => VNodeChild>,
    default: undefined,
  },
  menuProps: {
    type: Object as PropType<MenuProps>,
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

export interface ProLayoutInjection {
  menuPropsRef: ComputedRef<ProLayoutProps['menuProps']>;
  headerPropsRef: ComputedRef<ProLayoutProps['headerProps']>;
  contentPropsRef: ComputedRef<ProLayoutProps['contentProps']>;
  sidePropsRef: ComputedRef<ProLayoutProps['sideProps']>;
  titleRef: Ref<string | undefined>;
  layoutModeRef: ComputedRef<'side' | 'top' | 'mix'>;
  headerHeightRef: ComputedRef<string>;
  sidebarWidthRef: ComputedRef<string | number>;
  collapsedWidthRef: ComputedRef<string | number>;
  collapsedRef: Ref<boolean>;
  handleToggleCollapsed?: (collapsed: boolean) => void;
  handleRenderLogo?: ((collapsed: boolean) => VNodeChild) | undefined;
  handleRenderTitleLogo?: ((collapsed: boolean) => VNodeChild) | undefined;
}
