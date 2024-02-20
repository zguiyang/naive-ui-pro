import { DefineComponent } from 'vue';

declare module '*.md' {
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    any
  >;
  export default component;
}
