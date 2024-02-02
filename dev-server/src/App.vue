<script setup lang="ts">
import { h, ref } from 'vue';
import type { Component } from 'vue';

import { NButton, NIcon, NInput, NSpace } from 'naive-ui';
import { ProLayout } from 'naive-ui-pro';

import { BookFilled as BookIcon, HomeFilled } from '@vicons/antd';

const modeArr: ['side', 'top', 'mix'] = ['side', 'top', 'mix'];
const modeIndex = ref(0);
const currentLayoutMode = ref<'side' | 'top' | 'mix'>(modeArr[modeIndex.value]);

const titleRef = ref('Naive UI pro');

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
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
          {
            label: '羊男',
            key: 'sheep-man',
          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
        icon: renderIcon(BookIcon),
      },
    ],
  },
];
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

function toggleLayoutMode() {
  modeIndex.value += 1;
  currentLayoutMode.value = modeArr[modeIndex.value % modeArr.length] as any;
}

function renderLogo(collapsed: boolean) {
  console.log(collapsed);

  return h(NIcon, null, { default: () => h(HomeFilled) });
}

function renderTitleLogo(collapsed: boolean) {
  console.log(collapsed);

  return h(
    NSpace,
    {
      size: 22,
    },
    {
      default: () => [renderIcon(HomeFilled)(), 'Naive UI pro'],
    }
  );
}
</script>

<template>
  <pro-layout
    :title="titleRef"
    :layout-mode="currentLayoutMode"
    :menu-props="{
      options: menuOptions,
    }"
    :render-logo="renderLogo"
    :render-title-logo="renderTitleLogo">
    <n-input v-model:value="titleRef"></n-input>
    <n-button type="primary" @click="toggleLayoutMode">切换布局</n-button>
    <!-- <div style="background-color: blue; height: 120vh"></div> -->
    <!-- <div style="background-color: blue; height: 200px"></div> -->
  </pro-layout>
</template>

<style scoped></style>
