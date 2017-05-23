import {Ng2vdDropdownBasic} from './basic/dropdown-basic';
import {Ng2vdDropdownConfig} from './config/dropdown-config';
import {Ng2vdDropdownManual} from './manual/dropdown-manual';

export const DEMO_DIRECTIVES = [Ng2vdDropdownBasic, Ng2vdDropdownConfig, Ng2vdDropdownManual];

export const DEMO_SNIPPETS = {
  'basic': {
    'code': require('!!prismjs-loader?lang=typescript!./basic/dropdown-basic'),
    'markup': require('!!prismjs-loader?lang=markup!./basic/dropdown-basic.html')},
  'config': {
    'code': require('!!prismjs-loader?lang=typescript!./config/dropdown-config'),
    'markup': require('!!prismjs-loader?lang=markup!./config/dropdown-config.html')},
  'manual': {
    'code': require('!!prismjs-loader?lang=typescript!./manual/dropdown-manual'),
    'markup': require('!!prismjs-loader?lang=markup!./manual/dropdown-manual.html')}
};
