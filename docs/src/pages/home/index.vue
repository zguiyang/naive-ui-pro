<template>
  <n-layout
    :native-scrollbar="false"
    :position="isMobile ? 'static' : 'absolute'"
    :style="isMobile ? undefined : 'top: var(--header-height);'">
    <div class="banner" style="overflow: hidden">
      <right-image class="right-image" v-if="!(isMobile || isTablet)" />
      <n-h1 :style="titleStyle" class="naive-title">
        <span
          @mouseenter="handleTitleMouseEnter"
          @mouseleave="handleTitleMouseLeave"
          >Na{{ hover ? 'ï' : 'i' }}ve UI Pro</span
        >
      </n-h1>
      <n-p style="font-size: 16px; margin-top: 0; margin-bottom: 0">
        {{ t('intro1') }}
      </n-p>
      <n-p
        style="
          font-size: 16px;
          margin-bottom: 4px;
          margin-top: 4px;
          font-weight: 500;
        ">
        {{ t('intro2') }}
      </n-p>
      <n-p style="font-size: 16px; margin-top: 0">
        {{ t('intro3') }}
      </n-p>
      <div>
        <n-button
          type="default"
          size="large"
          style="margin-right: 12px"
          @click="handleThemeChangeClick">
          {{ t('intro4') }}
        </n-button>
        <n-button
          type="primary"
          :ghost="theme === 'dark'"
          size="large"
          @click="handleStartClick">
          {{ t('start') }}
        </n-button>
      </div>
      <left-image class="left-image" />
    </div>
    <n-layout-footer>
      <landing-footer centered />
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useThemeName } from '../../store';
import { i18n, useIsMobile, useIsTablet } from '../../utils/composables';
import LandingFooter from './footer.vue';
import leftImage from './left.vue';
import rightImage from './right.vue';

export default defineComponent({
  components: {
    LandingFooter,
    leftImage,
    rightImage,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const themeOptions = {
      dark: {
        next: 'light',
      },
      light: {
        next: 'dark',
      },
    };

    const hoverRef = ref(false);
    const isMobileRef = useIsMobile();
    const themeRef = useThemeName();

    function handleStartClick() {
      router.push(route.path + '/docs/installation');
    }
    function handleTitleMouseEnter() {
      hoverRef.value = true;
    }
    function handleTitleMouseLeave() {
      hoverRef.value = false;
    }
    function handleThemeChangeClick() {
      themeRef.value = themeOptions[themeRef.value].next;
    }

    return {
      themeOptions,
      hover: hoverRef,
      isMobile: isMobileRef,
      isTablet: useIsTablet(),
      theme: themeRef,
      titleStyle: computed(() => {
        if (isMobileRef.value) {
          return 'margin-top: 0; font-size: 64px !important';
        } else {
          return 'margin-top: 0; font-size: 80px !important';
        }
      }),
      ...i18n({
        'zh-CN': {
          start: '开始使用',
          intro1: '一个基于 Naive UI的组件库',
          intro2:
            '在 Naive UI 上进行了自己的封装，简单易用, 无需魔改, 与Naive UI 项目无缝对接',
          intro3: '只为开发更简单',
          intro4: '换个主题',
        },
        'en-US': {
          start: 'Get Started',
          intro1: 'A component library based on Naive UI',
          intro2:
            'Encapsulated on top of Naive UI, simple and easy to use, no need for modification, seamlessly integrated with the Naive UI project',
          intro3: 'Just to make development simpler',
          intro4: 'Change Theme',
        },
      }),
      handleStartClick,
      handleTitleMouseEnter,
      handleTitleMouseLeave,
      handleThemeChangeClick,
    };
  },
});
</script>

<style scoped>
.banner {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  justify-content: center;
}

.banner::after {
  content: '';
  width: 100%;
  height: 64px;
}

.naive-title {
  line-height: 1;
  font-family: Metropolis, sans-serif;
  margin-bottom: 18px !important;
}

@media only screen and (max-width: 1920px) {
  .left-image {
    right: calc(50% + 270px);
    width: calc(50% - 270px);
    min-width: 440px;
  }
  .right-image {
    left: calc(50% + 270px);
    width: calc(50% - 270px);
    min-width: 440px;
  }
}

@media only screen and (min-width: 1920px) {
  .left-image {
    left: 0;
    width: 700px;
  }
  .right-image {
    right: 0;
    width: 700px;
  }
}

.left-image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.right-image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

@media only screen and (max-width: 1023px) {
  .banner {
    position: static;
    text-align: left;
    padding-left: 16px;
    transform: none;
    padding-top: 60px;
    padding-right: 16px;
    min-height: 550px;
    height: calc(100vh - 124px);
  }
  .left-image {
    position: relative;
    left: -16px;
    min-width: unset;
    width: 300px;
    top: 8px;
    transform: none;
  }
}
</style>
