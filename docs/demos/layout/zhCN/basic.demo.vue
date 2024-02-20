<markdown>
# 基础用法

这个组件应该能够快速搭建页面布局框架
</markdown>

<template>
  <div style="width: 100%; position: relative; height: 400px">
    <pro-layout
      title="pro-layout"
      :menu-props="{
        options: menuOptions,
      }"></pro-layout>
  </div>
</template>

<script lang="ts">
import { Component, defineComponent, h } from 'vue';

import { NIcon } from 'naive-ui';

import { Book24Filled as BookIcon } from '@vicons/fluent';

export default defineComponent({
  setup() {
    function renderIcon(icon: Component) {
      return () => h(NIcon, null, { default: () => h(icon) });
    }

    const menuOptions = [
      {
        label: '且听风吟',
        key: 'hear-the-wind-sing',
        icon: renderIcon(BookIcon),
      },
      {
        label: '1973年的弹珠玩具',
        key: 'pinball-1973',
        disabled: true,
        icon: renderIcon(BookIcon),
        children: [
          {
            label: '鼠',
            key: 'rat',
          },
        ],
      },
    ];

    return {
      menuOptions,
    };
  },
});
</script>

<style></style>
