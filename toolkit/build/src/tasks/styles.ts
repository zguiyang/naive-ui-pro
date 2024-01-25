import {resolve } from 'path';
import gulp from 'gulp'
import fs from 'fs-extra';
import gulpSass from 'gulp-sass'
import * as dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import { DIST_DIR_PATH, STYLE_DIR, STYLE_DIR_PATH } from '@naive-ui-pro/build-utils'

const { existsSync, emptyDir, mkdirpSync } = fs
const outputStyleDir = resolve(DIST_DIR_PATH, STYLE_DIR);

/**
 * @param {string} dir
 */
function ensureEmptyDir(dir:string) {
  existsSync(dir) ? emptyDir(dir) : mkdirpSync(dir)
}
export function buildStyles() {
  const sass = gulpSass(dartSass);
  ensureEmptyDir(outputStyleDir);
  return gulp
    .src(resolve(STYLE_DIR_PATH, '*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(outputStyleDir))
}

