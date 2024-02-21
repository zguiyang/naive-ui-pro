<markdown>
# 基础用法

快递搭建一个系统的布局框架
</markdown>

<template>
  <div style="width: 100%; position: relative; height: 400px">
    <pro-layout
      title="Pro Layout"
      :menu-props="{
        options: menuOptions,
      }"
      :render-logo="renderLogo">
      <template #right-side> 导航栏右侧区域 </template>
    </pro-layout>
  </div>
</template>

<script lang="ts">
import { Component, defineComponent, h } from 'vue';

import { NIcon } from 'naive-ui';

import {
  Book24Filled as BookIcon,
  Home24Filled as HomeIcon,
} from '@vicons/fluent';

export default defineComponent({
  setup() {
    function renderIcon(icon: Component) {
      return () => h(NIcon, null, { default: () => h(icon) });
    }
    function renderLogo(collapsed: boolean) {
      console.log(collapsed);
      return h(
        NIcon,
        {
          size: 24,
        },
        {
          default: () => h(collapsed ? BookIcon : HomeIcon),
        }
      );
    }

    const menuOptions = [
      {
        label: 'menu-1',
        key: 'hear-the-wind-sing',
        icon: renderIcon(BookIcon),
      },
      {
        label: 'menu-2',
        key: 'pinball-1973',
        disabled: true,
        icon: renderIcon(BookIcon),
        children: [
          {
            label: 'menu-2-1',
            key: 'rat',
          },
        ],
      },
    ];

    return {
      menuOptions,
      renderLogo,
    };
  },
});
</script>

<style></style>
