import type { App } from 'vue';

import version from './version';

type ComponentType = any;

export interface NaiveUiProInstance {
  version: string;
  install: (app: App) => void;
}

interface NaiveUiProCreateOptions {
  components?: ComponentType[];
}

function create({
  components = [],
}: NaiveUiProCreateOptions = {}): NaiveUiProInstance {
  const installTargets: App[] = [];

  function registerComponent(
    app: App,
    name: string,
    component: ComponentType
  ): void {
    const registered = app.component(name);

    if (!registered) {
      app.component(name, component);
    }
  }

  function install(app: App): void {
    if (installTargets.includes(app)) return;

    installTargets.push(app);

    components.forEach(component => {
      const { name, alias } = component;

      registerComponent(app, name, component);

      if (alias) {
        alias.forEach((aliasName: string) => {
          registerComponent(app, aliasName, component);
        });
      }
    });
  }

  return {
    install,
    version,
  };
}

export default create;
