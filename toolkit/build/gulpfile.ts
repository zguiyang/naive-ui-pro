import gulp from 'gulp';
import { withTaskName, run, buildStyles } from './src';

const { series, parallel } = gulp;

export default series(
  withTaskName('clean:dist', () => run('pnpm run clean:dist')),
  withTaskName('build:bootstrap', () => run('pnpm run build:bootstrap')),
  parallel(
    series(buildStyles)
  ),
)
