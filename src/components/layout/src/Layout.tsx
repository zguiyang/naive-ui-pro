import { NLayout, NLayoutFooter } from 'naive-ui';
import { defineComponent } from 'vue';

import { useBemNamespace } from '../../_utils';
import { ProLayoutContent } from '../../layout-content';
import { ProLayoutHeader } from '../../layout-header';
import { ProLayoutSidebar } from '../../layout-sidebar';
import { useLayoutData } from './hooks.ts';
import { proLayoutProps } from './interface.ts';

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
      <div class={[bem.b(), bem.m(this.layoutModeRef)]}>
        <NLayout {...mergeExternalPropsRef}>
          <ProLayoutSidebar
            externalProps={{
              contentStyle: 'padding: 24px;',
            }}>
            <div style='height:120vh'>侧边栏</div>
          </ProLayoutSidebar>
          <NLayout>
            <ProLayoutHeader>导航栏</ProLayoutHeader>
            <ProLayoutContent
              externalProps={{
                contentStyle: 'padding: 16px 20px; min-height: 120vh',
              }}>
              {$slots.default?.()}
            </ProLayoutContent>
            <NLayoutFooter>底部区域</NLayoutFooter>
          </NLayout>
        </NLayout>
      </div>
    );
  },
});
export default Layout;
