import {Ng2vdAlertBasic} from './basic/alert-basic';
import {Ng2vdAlertCloseable} from './closeable/alert-closeable';
import {Ng2vdAlertCustom} from './custom/alert-custom';
import {Ng2vdAlertSelfclosing} from './selfclosing/alert-selfclosing';
import {Ng2vdAlertConfig} from './config/alert-config';

export const DEMO_DIRECTIVES =
    [Ng2vdAlertBasic, Ng2vdAlertCloseable, Ng2vdAlertCustom, Ng2vdAlertSelfclosing, Ng2vdAlertConfig];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/alert-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/alert-basic.html')
  },
  closeable: {
    code: require('!!prismjs-loader?lang=typescript!./closeable/alert-closeable'),
    markup: require('!!prismjs-loader?lang=markup!./closeable/alert-closeable.html')
  },
  custom: {
    code: require('!!prismjs-loader?lang=typescript!./custom/alert-custom'),
    markup: require('!!prismjs-loader?lang=markup!./custom/alert-custom.html')
  },
  selfclosing: {
    code: require('!!prismjs-loader?lang=typescript!./selfclosing/alert-selfclosing'),
    markup: require('!!prismjs-loader?lang=markup!./selfclosing/alert-selfclosing.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/alert-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/alert-config.html')
  }
};
