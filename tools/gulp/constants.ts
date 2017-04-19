import {join} from 'path';

export const MATERIAL_VERSION = require('../../package.json').version;

export const PROJECT_ROOT = join(__dirname, '../..');
export const SOURCE_ROOT = join(PROJECT_ROOT, 'src');

export const DIST_ROOT = join(PROJECT_ROOT, 'dist');
export const DIST_COMPONENTS_ROOT = join(DIST_ROOT, 'ng2v');

export const COVERAGE_RESULT_FILE = join(DIST_ROOT, 'coverage', 'coverage-summary.json');

export const HTML_MINIFIER_OPTIONS = {
  collapseWhitespace: true,
  removeComments: true,
  caseSensitive: true,
  removeAttributeQuotes: false
};

export const LICENSE_BANNER = `/**
  * @license Ng2v v${MATERIAL_VERSION}
  * Copyright (c) 2017 Ng2v, Inc. https://rajkeshwar.github.io/ng2v/
  * License: MIT
  */`;

export const NPM_VENDOR_FILES = [
  '@angular', 'core-js/client', 'hammerjs', 'rxjs', 'systemjs/dist',
  'zone.js/dist', 'reflect-metadata', 'web-animations-js'
];

export const COMPONENTS_DIR = join(SOURCE_ROOT, 'lib');
