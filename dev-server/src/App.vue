<script setup lang="ts">
import { h, ref } from 'vue';
import type { Component } from 'vue';

import { NButton, NIcon, NInput, NSpace } from 'naive-ui';
import { ProLayout } from 'naive-ui-pro';

import { BookFilled as BookIcon } from '@vicons/antd';

const modeArr: ('top' | 'side')[] = ['side', 'top'];
const modeIndex = ref(0);
const currentLayoutMode = ref<'side' | 'top'>(modeArr[modeIndex.value]);
const collapsedRef = ref(false);

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
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing0',
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
    label: '且听风吟',
    key: 'hear-the-wind-sing3',
    icon: renderIcon(BookIcon),
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1974',
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
    label: '且听风吟',
    key: 'hear-the-wind-sing5',
    icon: renderIcon(BookIcon),
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1976',
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
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

function toggleLayoutMode() {
  modeIndex.value += 1;
  currentLayoutMode.value = modeArr[modeIndex.value % modeArr.length] as any;
}

function handleUpdateCollapsed(collapsed: boolean) {
  console.log('🚀 ~ handleUpdateCollapsed ~ collapsed:', collapsed);
  // collapsedRef.value = collapsed;
}
// function renderLogo(collapsed: boolean) {
//   console.log(collapsed);

//   return h(
//     NIcon,
//     {
//       size: 24,
//     },
//     {
//       default: () => h(collapsed ? BookIcon : HomeFilled),
//     }
//   );
// }

// function renderTitleLogo(collapsed: boolean) {
//   console.log(collapsed);

//   return h(
//     NSpace,
//     {
//       size: 22,
//     },
//     {
//       default: () => [renderIcon(HomeFilled)(), 'Naive UI pro'],
//     }
//   );
// }
</script>

<template>
  <pro-layout
    :title="titleRef"
    v-model:collapsed="collapsedRef"
    :layout-mode="currentLayoutMode"
    content-width="fluid"
    :side-props="{}"
    copy-right-text="© 2024 Naive UI pro"
    :menu-props="{
      options: menuOptions,
    }"
    @update:collapsed="handleUpdateCollapsed">
    <!-- <template #left-side>LOGO区域</template> -->
    <template #right-side>导航栏右侧区域</template>
    <n-space vertical :size="16">
      <p>collapsed: {{ collapsedRef }}</p>
      <n-input v-model:value="titleRef"></n-input>
      <n-button type="primary" @click="toggleLayoutMode">切换布局</n-button>
      <n-button type="primary" @click="collapsedRef = !collapsedRef"
        >侧边栏折叠收起</n-button
      >
    </n-space>
    <!-- <div style="background-color: blue; height: 120vh"></div> -->
    <!-- <div style="background-color: blue; height: 200px"></div> -->
  </pro-layout>
</template>

<style scoped></style>
