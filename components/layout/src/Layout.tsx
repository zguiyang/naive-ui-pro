import { defineComponent } from 'vue';

const Layout = defineComponent({
  name: 'pro-layout',
  setup() {
    return () => (
      <div ref={'formRef'} className='pro-layout'>
        Layout
      </div>
    );
  },
});
export default Layout;
