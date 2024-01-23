import { defineComponent } from 'vue';

const Layout = defineComponent({
  name: 'pro-layout',
  setup(props, { slots }) {
    return () => (
      <div ref={'formRef'} className='pro-layout'>
        {slots.default?.()}
      </div>
    );
  },
});
export default Layout;
