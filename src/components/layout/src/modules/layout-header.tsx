import { defineComponent } from 'vue';

import { NLayoutHeader, layoutHeaderProps } from 'naive-ui';

import { useBemNamespace } from '../../../_utils';
import { useLayoutProvide } from '../hooks';

const bem = useBemNamespace('layout-header');

export const LayoutHeader = defineComponent({
  name: bem.name,
  props: layoutHeaderProps,
  setup() {
    const { LayoutProvide } = useLayoutProvide();

    return {
      heightRef: LayoutProvide.headerHeightRef,
      headerEXternalProps: LayoutProvide.headerPropsRef,
    };
  },
  render() {
    return (
      <NLayoutHeader
        {...this.headerEXternalProps}
        style={{ height: this.heightRef }}
        class={[bem.b()]}>
        <div class={[bem.e('left')]}>导航栏左侧区域</div>
        <div class={[bem.e('right')]}>导航栏右侧区域</div>
      </NLayoutHeader>
    );
  },
});
