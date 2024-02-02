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
    const { $slots } = this;
    const leftSideSlot = $slots.leftSide ?? $slots['left-side'];
    const rightSideSlot = $slots.rightSide ?? $slots['right-side'];

    return (
      <NLayoutHeader
        {...this.headerEXternalProps}
        style={{ height: this.heightRef }}
        class={[bem.b()]}>
        <div class={[bem.e('left')]}>{leftSideSlot?.()}</div>
        <div class={[bem.e('center')]}>1111</div>
        <div class={[bem.e('right')]}>{rightSideSlot?.()}</div>
      </NLayoutHeader>
    );
  },
});
