import { h } from 'vue';

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import { ProLayout } from '../index';

describe('pro-layout', () => {
  it('should render', () => {
    mount(ProLayout);
  });

  it('should work with default', async () => {
    const wrapper = mount(ProLayout, {
      props: {},
      slots: {
        default: () => ['page container'],
      },
    });
    expect(wrapper.find('.pro-layout').exists()).toBe(true);
    expect(wrapper.find('.pro-layout-header').exists()).toBe(true);
    expect(wrapper.find('.pro-layout-sidebar').exists()).toBe(true);
    expect(wrapper.find('.pro-layout__footer').exists()).toBe(true);
    expect(wrapper.find('.pro-layout__content').text()).toBe('page container');
  });

  describe('should work with title and logo', () => {
    it('should work with title', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          title: 'pro-layout',
        },
      });

      expect(wrapper.find('.pro-layout-header__title').text()).toBe(
        'pro-layout'
      );
    });

    it('should work with render logo', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          renderLogo: () =>
            h('img', {
              class: 'pro-layout-header__logo-img',
              src: 'https://img.yzcdn.cn/vant/logo.png',
            }),
        },
      });
      expect(
        wrapper.find('.pro-layout-header__logo-img').attributes('src')
      ).toBe('https://img.yzcdn.cn/vant/logo.png');
    });

    it('should work with render title logo', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          renderLogo: () =>
            h(
              'div',
              {
                style: 'display: flex; align-items: center; height: 100%;',
              },
              {
                default: () => [
                  h(
                    'span',
                    {
                      class: 'pro-layout-header__title-text',
                    },
                    { default: () => 'title text' }
                  ),
                  h('img', {
                    class: 'pro-layout-header__logo-img',
                    src: 'https://img.yzcdn.cn/vant/logo2.png',
                  }),
                ],
              }
            ),
        },
      });
      expect(wrapper.find('.pro-layout-header__title-text').text()).toBe(
        'title text'
      );
      expect(
        wrapper.find('.pro-layout-header__logo-img').attributes('src')
      ).toBe('https://img.yzcdn.cn/vant/logo2.png');
    });
  });

  describe('layout mode', () => {
    it('should work with layout mode side', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          layoutMode: 'side',
        },
        slots: {},
      });
      expect(wrapper.find('.pro-layout').exists()).toBe(true);
      expect(wrapper.find('.pro-layout-header').exists()).toBe(true);
      expect(wrapper.find('.pro-layout-sidebar').exists()).toBe(true);
      expect(
        wrapper.find('.pro-layout__container-wrapper').attributes('style')
      ).toContain('top: 60px;');
    });
    it('should work with layout mode top', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          layoutMode: 'top',
        },
        slots: {},
      });
      expect(wrapper.find('.pro-layout').exists()).toBe(true);
      expect(wrapper.find('.pro-layout-header').exists()).toBe(true);
      expect(wrapper.find('.pro-layout-sidebar').exists()).toBe(false);
      expect(
        wrapper.find('.pro-layout__container-wrapper').attributes('style')
      ).toContain('top: 60px; bottom: 48px;');
    });
  });

  it('should work with sidebar width', async () => {
    const wrapper = mount(ProLayout, {
      props: {
        sidebarWidth: 200,
      },
      slots: {},
    });
    const sidebarStyle = wrapper
      .find('.pro-layout-sidebar')
      .attributes('style');
    expect(sidebarStyle).toContain('width: 200px;');
  });
  describe('should work with content width', () => {
    it('should work with content width fixed', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          contentWidth: 'fluid',
        },
        slots: {},
      });
      expect(
        wrapper.find('.pro-layout-content').classes('pro-layout-content--fluid')
      ).toBe(true);
    });

    it('should work with content width fixed', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          contentWidth: 'fixed',
        },
      });
      expect(
        wrapper.find('.pro-layout-content').classes('pro-layout-content--fixed')
      ).toBe(true);
    });
  });

  it('should work with header height', async () => {
    const wrapper = mount(ProLayout, {
      props: {
        headerHeight: 70,
      },
      slots: {},
    });

    const headerStyle = wrapper.find('.pro-layout-header').attributes('style');
    const contentStyle = wrapper
      .find('.pro-layout__container-wrapper')
      .attributes('style');

    expect(headerStyle).toContain('height: 70px;');
    expect(contentStyle).toContain('top: 70px;');
  });
});
