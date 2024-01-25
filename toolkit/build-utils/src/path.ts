import { resolve } from 'path';

import {
  DIST_DIR,
  DOCS_DIR,
  ES_DIR,
  LIB_DIR,
  SOURCE_DIR,
  STYLE_DIR,
  TOOLKIT_DIR,
} from './constants';

export const PROJECT_ROOT_PATH = resolve(__dirname, '..', '..', '..');
export const SOURCE_DIR_PATH = resolve(PROJECT_ROOT_PATH, SOURCE_DIR);
export const STYLE_DIR_PATH = resolve(SOURCE_DIR_PATH, STYLE_DIR);
export const DOCS_DIR_PATH = resolve(PROJECT_ROOT_PATH, DOCS_DIR);
export const DIST_DIR_PATH = resolve(PROJECT_ROOT_PATH, DIST_DIR);
export const ES_DIR_PATH = resolve(DIST_DIR_PATH, ES_DIR);
export const LIB_DIR_PATH = resolve(DIST_DIR_PATH, LIB_DIR);
export const TOOLKIT_DIR_PATH = resolve(PROJECT_ROOT_PATH, TOOLKIT_DIR);
export const BUILD_CI_PATH = resolve(TOOLKIT_DIR_PATH, 'build');
export const PACKAGE_JSON_PATH = resolve(PROJECT_ROOT_PATH, 'package.json');
