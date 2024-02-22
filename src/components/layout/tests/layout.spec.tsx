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
        default: () => ['page context'],
      },
    });
    expect(wrapper.find('.pro-layout').exists()).toBe(true);
    expect(wrapper.find('.pro-layout-header').exists()).toBe(true);
    expect(wrapper.find('.pro-layout-sidebar').exists()).toBe(true);
    expect(wrapper.find('.pro-layout__footer').exists()).toBe(true);
    expect(wrapper.find('.pro-layout__content').text()).toBe('page context');
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
              src: 'https://xxx/logo.png',
            }),
        },
      });
      expect(
        wrapper.find('.pro-layout-header__logo-img').attributes('src')
      ).toBe('https://xxx/logo.png');
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
                    src: 'https://logo2.png',
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
      ).toBe('https://logo2.png');
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

  describe('should work with header height prop', () => {
    it('should work with header default height', async () => {
      const wrapper = mount(ProLayout, {
        props: {},
        slots: {},
      });

      const headerStyle = wrapper
        .find('.pro-layout-header')
        .attributes('style');
      const contentStyle = wrapper
        .find('.pro-layout__container-wrapper')
        .attributes('style');

      expect(headerStyle).toContain('height: 60px;');
      expect(contentStyle).toContain('top: 60px;');
    });

    it('The string height property should work properly', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          headerHeight: '70',
        },
        slots: {},
      });

      const headerStyle = wrapper
        .find('.pro-layout-header')
        .attributes('style');
      const contentStyle = wrapper
        .find('.pro-layout__container-wrapper')
        .attributes('style');

      expect(headerStyle).toContain('height: 70px;');
      expect(contentStyle).toContain('top: 70px;');
    });

    it('The number height property should work properly', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          headerHeight: 70,
        },
        slots: {},
      });

      const headerStyle = wrapper
        .find('.pro-layout-header')
        .attributes('style');
      const contentStyle = wrapper
        .find('.pro-layout__container-wrapper')
        .attributes('style');

      expect(headerStyle).toContain('height: 70px;');
      expect(contentStyle).toContain('top: 70px;');
    });
  });

  describe('should work with sidebar with prop', () => {
    it('should work with sidebar default width', async () => {
      const wrapper = mount(ProLayout, {
        props: {},
        slots: {},
      });
      const sidebarStyle = wrapper
        .find('.pro-layout-sidebar')
        .attributes('style');

      expect(sidebarStyle).toContain('width: 248px;');
    });

    it('set sidebar width', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          sideBarWidth: 200,
        },
        slots: {},
      });
      const sidebarStyle = wrapper
        .find('.pro-layout-sidebar')
        .attributes('style');

      expect(sidebarStyle).toContain('width: 200px;');
    });
  });

  describe('should work with collapsed with prop', () => {
    it('should work with collapsed default width', async () => {
      const wrapper = mount(ProLayout, {
        props: {},
        slots: {},
      });
      const sidebarStyle = wrapper
        .find('.pro-layout-sidebar')
        .attributes('style');

      expect(sidebarStyle).toContain('max-width: 248px; width: 248px');
    });

    it('set collapsed width', async () => {
      const wrapper = mount(ProLayout, {
        props: {
          collapsed: true,
          sideBarWidth: 200,
          collapsedWidth: 80,
        },
        slots: {},
      });
      const sidebarStyle = wrapper
        .find('.pro-layout-sidebar')
        .attributes('style');

      expect(sidebarStyle).toContain('max-width: 80px; width: 200px;');
    });
  });

  describe('should work with collapsed prop', () => {
    it('should work with default-collapsed', async () => {
      const wrapper = await mount(ProLayout, {
        props: {
          defaultCollapsed: true,
        },
      });

      expect(
        wrapper.find('.pro-layout-sidebar').classes('n-layout-sider--collapsed')
      ).toBe(true);

      expect(wrapper.find('.pro-layout-sidebar').attributes('style')).toContain(
        'max-width: 60px;'
      );
    });

    it('should work with unControlled mode', async () => {
      const wrapper = await mount(ProLayout, {
        props: {},
      });

      expect(
        wrapper.find('.pro-layout-sidebar').classes('n-layout-sider--collapsed')
      ).toBe(false);

      expect(wrapper.find('.n-menu').classes('n-menu--collapsed')).toBe(false);
      expect(wrapper.find('.pro-layout-sidebar').attributes('style')).toContain(
        'max-width: 248px;'
      );

      await wrapper.find('.n-layout-toggle-button').trigger('click');

      expect(
        wrapper.find('.pro-layout-sidebar').classes('n-layout-sider--collapsed')
      ).toBe(true);
      expect(wrapper.find('.n-menu').classes('n-menu--collapsed')).toBe(true);
      expect(wrapper.find('.pro-layout-sidebar').attributes('style')).toContain(
        'max-width: 60px;'
      );
    });

    it('should work with controlled mode', async () => {
      const wrapper = await mount(ProLayout, {
        props: {
          collapsed: true,
          'onUpdate:collapsed': e => wrapper.setProps({ collapsed: e }),
        },
      });

      expect(
        wrapper.find('.pro-layout-sidebar').classes('n-layout-sider--collapsed')
      ).toBe(true);
      expect(wrapper.find('.n-menu').classes('n-menu--collapsed')).toBe(true);

      await wrapper.find('.n-layout-toggle-button').trigger('click');

      expect(
        wrapper.find('.pro-layout-sidebar').classes('n-layout-sider--collapsed')
      ).toBe(false);
      expect(wrapper.props('collapsed')).toBe(false);
      expect(wrapper.find('.n-menu').classes('n-menu--collapsed')).toBe(false);
    });
  });
});
