// rubbish code here
import { h } from 'vue';
import { RouterLink } from 'vue-router';

export const renderMenuLabel = option => {
  if (!('path' in option) || option.label === '--Debug') {
    return option.label;
  }
  return h(
    RouterLink,
    {
      to: option.path,
    },
    { default: () => option.label }
  );
};

const appendCounts = item => {
  if (!item.children) {
    item.count = 1;
    return item;
  }
  if (item.children) {
    item.children.forEach(appendCounts);
    item.count = item.children.reduce((sum, item) => sum + item.count, 0);
    if (item.type === 'group') {
      item.en += ` (${item.count})`;
      item.zh += ` (${item.count})`;
    }
    return item;
  }
};

function createItems(lang, theme, prefix, items) {
  const isZh = lang === 'zh-CN';
  const langKey = isZh ? 'zh' : 'en';
  return items.map(rawItem => {
    const item = {
      ...rawItem,
      key: rawItem.en,
      label: rawItem[langKey] || rawItem.en,
      extra: rawItem.enSuffix && isZh ? rawItem.en : undefined,
      path: rawItem.path
        ? `/${lang}/${theme}` + prefix + rawItem.path
        : undefined,
    };
    if (rawItem.children) {
      item.children = createItems(lang, theme, prefix, rawItem.children);
    }
    return item;
  });
}

export function createDocumentationMenuOptions({
  lang,
  theme,
}: {
  lang: string;
  theme: string;
  mode: string;
}) {
  return createItems(lang, theme, '/docs', [
    {
      en: 'Introduction',
      zh: '介绍',
      type: 'group',
      children: [
        {
          en: 'Naive UI',
          zh: 'Naive UI',
          path: '/introduction',
        },
      ],
    },
    {
      en: 'Getting Started',
      zh: '快速上手',
      type: 'group',
      children: [
        {
          en: 'Installation',
          zh: '安装',
          path: '/installation',
        },
        {
          en: 'Import on Demand',
          zh: '按需引入',
          path: '/import-on-demand',
        },
        {
          en: 'Common Issues',
          zh: '常见问题',
          path: '/common-issues',
        },
      ],
    },
    {
      en: 'Guides',
      zh: '指南',
      type: 'group',
      children: [
        {
          en: 'Customizing Theme',
          zh: '调整主题',
          path: '/customize-theme',
        },
      ],
    },
    {
      en: 'Version',
      zh: '版本',
      type: 'group',
      children: [
        {
          en: 'Change Log',
          zh: '变更日志',
          path: '/changelog',
        },
      ],
    },
  ]);
}

export function createComponentMenuOptions({
  lang,
  theme,
}: {
  lang?: string;
  theme?: string;
  mode?: string;
}) {
  return createItems(lang, theme, '/components', [
    appendCounts({
      zh: '通用组件',
      en: 'Common Components',
      type: 'group',
      children: [
        {
          en: 'Layout',
          zh: '高级布局',
          enSuffix: true,
          path: '/layout',
        },
      ],
    }),
    appendCounts({
      zh: '数据录入组件',
      en: 'Data Input Components',
      type: 'group',
      children: [
        {
          en: 'Auto Complete',
          zh: '自动填充',
          enSuffix: true,
          path: '/auto-complete',
        },
      ],
    }),
    appendCounts({
      zh: '数据展示组件',
      en: 'Data Display Components',
      type: 'group',
      children: [
        {
          en: 'Tree',
          zh: '树',
          enSuffix: true,
          path: '/tree',
        },
      ],
    }),
    appendCounts({
      zh: '导航组件',
      en: 'Navigation Components',
      type: 'group',
      children: [],
    }),
    appendCounts({
      zh: '反馈组件',
      en: 'Feedback Components',
      type: 'group',
      children: [],
    }),
    appendCounts({
      zh: '布局组件',
      en: 'Layout Components',
      type: 'group',
      children: [],
    }),
  ]);
}
