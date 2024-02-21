<markdown>
  # basic

  Rapidly construct the layout framework of a system. 

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
        label: 'menu-1',
        key: 'hear-the-wind-sing',
        icon: renderIcon(BookIcon),
      },
      {
        label: 'menu-2',
        key: 'pinball-1973',
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
    };
  },
});
</script>

<style></style>
