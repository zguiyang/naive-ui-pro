import * as components from './components';
import create from './create';

const naiveUiPro = create({
  components: Object.keys(components).map(
    key => components[key as keyof typeof components]
  ),
});

export const install = naiveUiPro.install;

export default naiveUiPro;
