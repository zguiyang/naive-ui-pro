import { defineComponent } from 'vue';

import { NLayout, NLayoutFooter } from 'naive-ui';

import { useBemNamespace } from '../../_utils';
import { useLayoutData } from './hooks.ts';
import { proLayoutProps } from './interface.ts';
import { LayoutContent } from './modules/layout-content.tsx';
import { LayoutHeader } from './modules/layout-header';
import { LayoutSidebar } from './modules/layout-sidebar';

const bem = useBemNamespace('layout');
const Layout = defineComponent({
  name: bem.name,
  props: proLayoutProps,
  setup(props) {
    const { titleRef, layoutModeRef, mergeExternalPropsRef, handleRenderLogo } =
      useLayoutData(props);
    return {
      titleRef,
      layoutModeRef,
      mergeExternalPropsRef,
      handleRenderLogo,
    };
  },
  render() {
    const { mergeExternalPropsRef, $slots } = this;

    return (
      <NLayout
        class={[bem.b(), bem.m(this.layoutModeRef)]}
        {...mergeExternalPropsRef}
        position={'absolute'}>
        <LayoutSidebar
          externalProps={{
            position: 'absolute',
          }}>
          <div style='height:200px; background-color: #f2f3f5;'>侧边栏</div>
        </LayoutSidebar>
        <NLayout
          class={[bem.e('container-wrapper')]}
          position={'absolute'}
          style={{ marginLeft: '274px' }}>
          <LayoutHeader
            externalProps={{
              style: { height: '64px' },
            }}>
            导航栏
          </LayoutHeader>
          <NLayout
            class={[bem.e('content')]}
            position={'absolute'}
            style={{
              top: '64px',
              background: '#f2f3f5',
            }}>
            <LayoutContent>{$slots.default?.()}</LayoutContent>
            <NLayoutFooter
              class={[bem.e('footer')]}
              position='absolute'
              style='height: 64px; padding: 24px'>
              <div>页脚区域</div>
            </NLayoutFooter>
          </NLayout>
        </NLayout>
      </NLayout>
    );
  },
});
export default Layout;
