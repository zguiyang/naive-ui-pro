import { computed, defineComponent, toRef } from 'vue';
import type { PropType, VNodeChild } from 'vue';

import { NLayoutHeader, NMenu } from 'naive-ui';

import { cloneDeep } from 'lodash-es';

import { useBemNamespace } from '../../../_utils';
import { useLayoutProvide } from '../hooks';

const bem = useBemNamespace('layout-header');

export const proLayoutHeaderProps = {
  title: {
    type: String,
    default: undefined,
  },
  height: {
    type: String,
    required: true,
  },
  renderLogo: {
    type: Function as PropType<() => VNodeChild>,
    default: undefined,
  },
  renderTitleLogo: {
    type: Function as PropType<() => VNodeChild>,
    default: undefined,
  },
};

export const LayoutHeader = defineComponent({
  name: bem.name,
  props: proLayoutHeaderProps,
  setup(props) {
    const { LayoutProvide } = useLayoutProvide();

    return {
      titleRef: toRef(props, 'title'),
      heightRef: toRef(props, 'height'),
      headerExternalProps: LayoutProvide.headerPropsRef,
      contentWidthRef: LayoutProvide.contentWidthRef,
      layoutModeRef: LayoutProvide.layoutModeRef,
      menuProps: computed(() => {
        const menuProps = cloneDeep(LayoutProvide.menuPropsRef.value ?? {});

        return Object.assign(menuProps, {
          mode: 'horizontal',
          responsive: true,
        });
      }),
    };
  },
  render() {
    const {
      titleRef,
      contentWidthRef,
      $slots,
      layoutModeRef,
      menuProps,
      renderLogo,
      renderTitleLogo,
    } = this;
    const leftSideSlot = $slots.leftSide ?? $slots['left-side'];
    const rightSideSlot = $slots.rightSide ?? $slots['right-side'];

    return (
      <NLayoutHeader
        {...this.headerExternalProps}
        bordered
        position={'static'}
        style={{ height: this.heightRef }}
        class={[bem.b(), layoutModeRef === 'top' && bem.m(contentWidthRef)]}>
        <div class={[bem.e('left')]}>
          {leftSideSlot ? (
            leftSideSlot?.()
          ) : (
            <>
              {renderTitleLogo ? (
                renderTitleLogo()
              ) : (
                <>
                  {renderLogo ? (
                    <div
                      class={[bem.e('logo')]}
                      style={{ marginRight: '12px' }}>
                      {renderLogo()}
                    </div>
                  ) : null}
                  <span class={[bem.e('title')]}>{titleRef}</span>
                </>
              )}
            </>
          )}
        </div>
        {layoutModeRef === 'side' ? null : (
          <div class={[bem.e('center')]}>
            <NMenu {...menuProps} />
          </div>
        )}
        <div class={[bem.e('right')]}>{rightSideSlot?.()}</div>
      </NLayoutHeader>
    );
  },
});
