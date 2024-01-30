import { defineComponent } from 'vue';

import { NLayout, NLayoutFooter } from 'naive-ui';

import { useBemNamespace } from '../../_utils';
import { useLayoutData } from './hooks.ts';
import { proLayoutProps } from './interface.ts';
import { ProLayoutContent } from './modules/layout-content.tsx';
import { ProLayoutHeader } from './modules/layout-header';
import { ProLayoutSidebar } from './modules/layout-sidebar';

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
        <ProLayoutSidebar
          externalProps={{
            position: 'absolute',
          }}>
          <div style='height:200px; background-color: #f2f3f5;'>侧边栏</div>
        </ProLayoutSidebar>
        <NLayout
          class={[bem.e('container-wrapper')]}
          position={'absolute'}
          style={{ marginLeft: '274px' }}>
          <ProLayoutHeader
            externalProps={{
              style: { height: '64px' },
            }}>
            导航栏
          </ProLayoutHeader>
          <NLayout
            class={[bem.e('content')]}
            position={'absolute'}
            style={{
              top: '64px',
              background: '#f2f3f5',
            }}>
            <ProLayoutContent>{$slots.default?.()}</ProLayoutContent>
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
