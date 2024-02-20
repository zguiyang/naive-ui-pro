import type { App, Component, DefineComponent } from 'vue';

import version from './version';

type ComponentType = any;

export interface NaiveUiProInstance {
  version: string;
  componentPrefix: string;
  install: (app: App) => void;
}

interface NaiveUiProCreateOptions {
  components?: ComponentType[];
  componentPrefix?: string;
}

function create({
  componentPrefix = 'pro',
  components = [],
}: NaiveUiProCreateOptions = {}): NaiveUiProInstance {
  const installTargets: App[] = [];

  function registerComponent(
    app: App,
    name: string,
    component: ComponentType
  ): void {
    const registered = app.component(componentPrefix + name);

    if (!registered) {
      app.component(
        componentPrefix + name,
        component as Component<any> | DefineComponent<any>
      );
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
    componentPrefix,
    install,
    version,
  };
}

export default create;
