import {Ng2vdTimepickerBasic} from './basic/timepicker-basic';
import {Ng2vdTimepickerMeridian} from './meridian/timepicker-meridian';
import {Ng2vdTimepickerSeconds} from './seconds/timepicker-seconds';
import {Ng2vdTimepickerSteps} from './steps/timepicker-steps';
import {Ng2vdTimepickerValidation} from './validation/timepicker-validation';
import {Ng2vdTimepickerSpinners} from './spinners/timepicker-spinners';
import {Ng2vdTimepickerConfig} from './config/timepicker-config';

export const DEMO_DIRECTIVES = [
  Ng2vdTimepickerBasic, Ng2vdTimepickerMeridian, Ng2vdTimepickerSeconds, Ng2vdTimepickerSpinners, Ng2vdTimepickerSteps,
  Ng2vdTimepickerValidation, Ng2vdTimepickerConfig
];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/timepicker-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/timepicker-basic.html')
  },
  meridian: {
    code: require('!!prismjs-loader?lang=typescript!./meridian/timepicker-meridian'),
    markup: require('!!prismjs-loader?lang=markup!./meridian/timepicker-meridian.html')
  },
  seconds: {
    code: require('!!prismjs-loader?lang=typescript!./seconds/timepicker-seconds'),
    markup: require('!!prismjs-loader?lang=markup!./seconds/timepicker-seconds.html')
  },
  spinners: {
    code: require('!!prismjs-loader?lang=typescript!./spinners/timepicker-spinners'),
    markup: require('!!prismjs-loader?lang=markup!./spinners/timepicker-spinners.html')
  },
  steps: {
    code: require('!!prismjs-loader?lang=typescript!./steps/timepicker-steps'),
    markup: require('!!prismjs-loader?lang=markup!./steps/timepicker-steps.html')
  },
  validation: {
    code: require('!!prismjs-loader?lang=typescript!./validation/timepicker-validation'),
    markup: require('!!prismjs-loader?lang=markup!./validation/timepicker-validation.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/timepicker-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/timepicker-config.html')
  }
};
