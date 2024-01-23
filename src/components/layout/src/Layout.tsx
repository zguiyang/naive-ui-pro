import { defineComponent } from 'vue';

const Layout = defineComponent({
  name: 'Layout',
  setup(props, { slots }) {
    console.log(props);
    return () => (
      <div ref={'formRef'} class={['pro-layout']}>
        {slots.default?.()}
      </div>
    );
  },
});
export default Layout;
