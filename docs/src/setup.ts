import 'vfonts/FiraCode.css';
import 'vfonts/Inter.css';

import ComponentDemo from './components/Demo.vue';
import ComponentDemos from './components/Demos.tsx';
import EditOnGithubHeader from './components/EditOnGithubHeader.vue';
import './styles/demo.css';

export function installDemoComponents(app) {
  app.component('ComponentDemo', ComponentDemo);
  app.component('ComponentDemos', ComponentDemos);
  app.component('EditOnGithubHeader', EditOnGithubHeader);
}
