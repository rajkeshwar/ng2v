import {Ng2vdDatepickerBasic} from './basic/datepicker-basic';
import {Ng2vdDatepickerConfig} from './config/datepicker-config';
import {Ng2vdDatepickerI18n} from './i18n/datepicker-i18n';
import {Ng2vdDatepickerDisabled} from './disabled/datepicker-disabled';
import {Ng2vdDatepickerPopup} from './popup/datepicker-popup';
import {Ng2vdDatepickerCustomday} from './customday/datepicker-customday';
import {Ng2vdDatepickerMultiple} from './multiple/datepicker-multiple';
import {Ng2vdDatepickerCalendars} from './calendars/datepicker-calendars';

export const DEMO_DIRECTIVES = [
  Ng2vdDatepickerBasic, Ng2vdDatepickerPopup, Ng2vdDatepickerDisabled, Ng2vdDatepickerI18n,
  Ng2vdDatepickerCustomday, Ng2vdDatepickerConfig, Ng2vdDatepickerMultiple, Ng2vdDatepickerCalendars
];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/datepicker-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/datepicker-basic.html')
  },
  popup: {
    code: require('!!prismjs-loader?lang=typescript!./popup/datepicker-popup'),
    markup: require('!!prismjs-loader?lang=markup!./popup/datepicker-popup.html')
  },
  disabled: {
    code: require('!!prismjs-loader?lang=typescript!./disabled/datepicker-disabled'),
    markup: require('!!prismjs-loader?lang=markup!./disabled/datepicker-disabled.html')
  },
  i18n: {
    code: require('!!prismjs-loader?lang=typescript!./i18n/datepicker-i18n'),
    markup: require('!!prismjs-loader?lang=markup!./i18n/datepicker-i18n.html')
  },
  customday: {
    code: require('!!prismjs-loader?lang=typescript!./customday/datepicker-customday'),
    markup: require('!!prismjs-loader?lang=markup!./customday/datepicker-customday.html')
  },
  multiple: {
    code: require('!!prismjs-loader?lang=typescript!./multiple/datepicker-multiple'),
    markup: require('!!prismjs-loader?lang=markup!./multiple/datepicker-multiple.html')
  },
  calendars: {
    code: require('!!prismjs-loader?lang=typescript!./calendars/datepicker-calendars'),
    markup: require('!!prismjs-loader?lang=markup!./calendars/datepicker-calendars.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/datepicker-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/datepicker-config.html')
  }
};
