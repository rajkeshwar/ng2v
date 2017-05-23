import {Ng2vdTypeaheadFormat} from './format/typeahead-format';
import {Ng2vdTypeaheadHttp} from './http/typeahead-http';
import {Ng2vdTypeaheadBasic} from './basic/typeahead-basic';
import {Ng2vdTypeaheadTemplate} from './template/typeahead-template';
import {Ng2vdTypeaheadConfig} from './config/typeahead-config';

export const DEMO_DIRECTIVES =
    [Ng2vdTypeaheadFormat, Ng2vdTypeaheadHttp, Ng2vdTypeaheadBasic, Ng2vdTypeaheadTemplate, Ng2vdTypeaheadConfig];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/typeahead-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/typeahead-basic.html')
  },
  format: {
    code: require('!!prismjs-loader?lang=typescript!./format/typeahead-format'),
    markup: require('!!prismjs-loader?lang=markup!./format/typeahead-format.html')
  },
  http: {
    code: require('!!prismjs-loader?lang=typescript!./http/typeahead-http'),
    markup: require('!!prismjs-loader?lang=markup!./http/typeahead-http.html')
  },
  template: {
    code: require('!!prismjs-loader?lang=typescript!./template/typeahead-template'),
    markup: require('!!prismjs-loader?lang=markup!./template/typeahead-template.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/typeahead-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/typeahead-config.html')
  }
};
