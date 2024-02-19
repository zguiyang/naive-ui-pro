<template>
  <n-layout :position="isMobile ? 'static' : 'absolute'" class="root-layout">
    <site-header />
    <router-view />
  </n-layout>
</template>

<script lang="ts">
import { onMounted } from 'vue';

import { useLoadingBar } from 'naive-ui';

import { loadingBarApiRef } from '../router/router.ts';
import { useIsMobile } from '../utils/composables';
import SiteHeader from './SiteHeader.vue';

export default {
  name: 'Site',
  components: {
    SiteHeader,
  },
  setup() {
    const loadingBar = useLoadingBar();
    const isMobileRef = useIsMobile();
    onMounted(() => {
      loadingBarApiRef.value = loadingBar;
      loadingBar.finish();
    });
    return {
      isMobile: isMobileRef,
    };
  },
};
</script>
