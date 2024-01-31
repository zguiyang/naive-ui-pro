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
  headerProps: ProLayoutProps['headerProps'];
  contentProps: ProLayoutProps['contentProps'];
  sideProps: ProLayoutProps['sideProps'];
  titleRef: Ref<string | undefined>;
  layoutModeRef: Ref<'side' | 'top' | 'mix'>;
  headerHeightRef: Ref<string>;
  handleToggleCollapsed?: (collapsed: boolean) => void;
  handleRenderLogo?: ((collapsed: boolean) => VNodeChild) | undefined;
  handleRenderTitleLogo?: ((collapsed: boolean) => VNodeChild) | undefined;
}
