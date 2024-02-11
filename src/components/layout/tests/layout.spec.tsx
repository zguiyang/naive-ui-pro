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
});
