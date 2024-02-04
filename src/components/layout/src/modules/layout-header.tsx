import { computed, defineComponent } from 'vue';

import { NLayoutHeader, NMenu, layoutHeaderProps } from 'naive-ui';

import { cloneDeep } from 'lodash-es';

import { useBemNamespace } from '../../../_utils';
import { useLayoutProvide } from '../hooks';

const bem = useBemNamespace('layout-header');

export const LayoutHeader = defineComponent({
  name: bem.name,
  props: layoutHeaderProps,
  setup() {
    const { LayoutProvide } = useLayoutProvide();

    return {
      titleRef: LayoutProvide.titleRef,
      heightRef: LayoutProvide.headerHeightRef,
      headerEXternalProps: LayoutProvide.headerPropsRef,
      contentWidthRef: LayoutProvide.contentWidthRef,
      layoutModeRef: LayoutProvide.layoutModeRef,
      menuProps: computed(() => {
        const menuProps = cloneDeep(LayoutProvide.menuPropsRef.value ?? {});

        return Object.assign(menuProps, {
          mode: 'horizontal',
          responsive: true,
        });
      }),
      renderLogo: LayoutProvide.handleRenderLogo,
      renderTitleLogo: LayoutProvide.handleRenderTitleLogo,
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
        {...this.headerEXternalProps}
        style={{ height: this.heightRef }}
        class={[bem.b(), layoutModeRef === 'top' && bem.m(contentWidthRef)]}>
        <div class={[bem.e('left')]}>
          {leftSideSlot ? (
            leftSideSlot?.()
          ) : (
            <>
              {renderTitleLogo ? (
                renderTitleLogo(false)
              ) : (
                <>
                  {renderLogo ? (
                    <div
                      class={[bem.e('logo')]}
                      style={{ marginRight: '12px' }}>
                      {renderLogo(false)}
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
