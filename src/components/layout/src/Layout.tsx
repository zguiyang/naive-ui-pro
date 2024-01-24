import { defineComponent } from 'vue';

import { useBemNamespace } from '../../_utils';

const bem = useBemNamespace('layout');
const Layout = defineComponent({
  name: 'Layout',
  setup(props, { slots }) {
    console.log(props);
    return () => (
      <div ref={'formRef'} class={[bem.b(), bem.m('sidebar')]}>
        {slots.default?.()}
      </div>
    );
  },
});
export default Layout;
