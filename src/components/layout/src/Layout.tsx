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
    const { titleRef, layoutModeRef, mergeLayoutPropsRef, handleRenderLogo } =
      useLayoutData(props);
    return {
      titleRef,
      layoutModeRef,
      mergeLayoutPropsRef,
      handleRenderLogo,
    };
  },
  render() {
    const { mergeLayoutPropsRef, $slots } = this;
    return (
      <div class={[bem.b(), bem.m(this.layoutModeRef)]}>
        <NLayout {...mergeLayoutPropsRef}>
          <ProLayoutSidebar
            sidebarProps={{
              contentStyle: 'padding: 24px;',
            }}>
            <div style='height:120vh'>侧边栏</div>
          </ProLayoutSidebar>
          <NLayout>
            <ProLayoutHeader>导航栏</ProLayoutHeader>
            <ProLayoutContent
              contentProps={{
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
