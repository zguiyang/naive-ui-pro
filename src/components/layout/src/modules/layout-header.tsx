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
      headerEXternalProps: LayoutProvide.headerProps,
    };
  },
  render() {
    return (
      <NLayoutHeader
        {...this.headerEXternalProps}
        style={{ height: this.heightRef }}
        class={[bem.b()]}>
        导航栏区域
      </NLayoutHeader>
    );
  },
});
