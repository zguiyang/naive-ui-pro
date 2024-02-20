<template>
  <n-layout
    id="doc-layout"
    :has-sider="showSider"
    :position="isMobile ? 'static' : 'absolute'"
    :style="{
      top: isMobile ? '' : 'var(--header-height)',
    }">
    <n-layout-sider
      :native-scrollbar="false"
      :collapsed-width="0"
      collapse-mode="transform"
      bordered
      show-trigger="bar"
      trigger-style="top: calc(50% - var(--header-height));"
      v-if="showSider">
      <n-menu
        :value="menuValue"
        :options="options"
        :render-label="renderMenuLabel" />
    </n-layout-sider>
    <n-layout
      ref="layoutInstRef"
      :native-scrollbar="false"
      :position="isMobile || showSider ? 'static' : 'absolute'"
      content-style="min-height: calc(100vh - var(--header-height)); display: flex; flex-direction: column;">
      <router-view />
      <site-footer />
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
// Frame component for components & docs page
import { computed, ref, toRef, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useMemo } from 'vooks';

import { renderMenuLabel } from '../menu-options.ts';
import { useComponentOptions, useDocOptions } from '../store';
import { useIsMobile, useIsTablet } from '../utils/composables.ts';
import { findMenuValue } from '../utils/route.ts';
import SiteFooter from './home/footer.vue';

export default {
  components: {
    SiteFooter,
  },
  setup() {
    const route = useRoute();
    const layoutInstRef = ref(null);
    const docOptionsRef = useDocOptions();
    const componentOptionsRef = useComponentOptions();
    const optionsRef = computed(() =>
      route.path.includes('/docs/')
        ? docOptionsRef.value
        : componentOptionsRef.value
    );

    const menuValueRef = computed(() => {
      return findMenuValue(optionsRef.value, route.path);
    });
    watch(toRef(route, 'path'), (value, oldValue) => {
      const langAndThemeReg = /\/(zh-CN|en-US)\/(light|dark|os-theme)/g;
      // only theme & lang change do not restore the scroll status
      if (
        value.replace(langAndThemeReg, '') !==
        oldValue.replace(langAndThemeReg, '')
      ) {
        layoutInstRef.value.scrollTo(0, 0);
      }
    });
    const isMobileRef = useIsMobile();
    const isTabletRef = useIsTablet();

    return {
      renderMenuLabel,
      showSider: useMemo(() => {
        return !isMobileRef.value && !isTabletRef.value;
      }),
      layoutInstRef,
      options: optionsRef,
      menuValue: menuValueRef,
      isMobile: isMobileRef,
    };
  },
};
</script>
