import { defineComponent } from 'vue';

const Layout = defineComponent({
  name: 'pro-layout',
  setup(props, { slots }) {
    console.log(props);
    return () => (
      <div ref={'formRef'} className='pro-layout'>
        {slots.default?.()}
      </div>
    );
  },
});
export default Layout;
