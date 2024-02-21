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

function genreComponentName(name: string, prefix: string): string {
  if (name.match(/^(Pro[A-Z]|pro-[a-z])/)) {
    return name;
  }
  return prefix + name;
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
    const registered = app.component(genreComponentName(name, componentPrefix));

    if (!registered) {
      app.component(
        genreComponentName(name, componentPrefix),
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
