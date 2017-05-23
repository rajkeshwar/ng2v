import {Ng2vdPaginationAdvanced} from './advanced/pagination-advanced';
import {Ng2vdPaginationBasic} from './basic/pagination-basic';
import {Ng2vdPaginationSize} from './size/pagination-size';
import {Ng2vdPaginationConfig} from './config/pagination-config';
import {Ng2vdPaginationDisabled} from './disabled/pagination-disabled';

export const DEMO_DIRECTIVES = [
  Ng2vdPaginationAdvanced, Ng2vdPaginationBasic, Ng2vdPaginationSize, Ng2vdPaginationConfig, Ng2vdPaginationDisabled
];

export const DEMO_SNIPPETS = {
  advanced: {
    code: require('!!prismjs-loader?lang=typescript!./advanced/pagination-advanced'),
    markup: require('!!prismjs-loader?lang=markup!./advanced/pagination-advanced.html')
  },
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/pagination-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/pagination-basic.html')
  },
  size: {
    code: require('!!prismjs-loader?lang=typescript!./size/pagination-size'),
    markup: require('!!prismjs-loader?lang=markup!./size/pagination-size.html')
  },
  disabled: {
    code: require('!!prismjs-loader?lang=typescript!./disabled/pagination-disabled'),
    markup: require('!!prismjs-loader?lang=markup!./disabled/pagination-disabled.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/pagination-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/pagination-config.html')
  }
};
