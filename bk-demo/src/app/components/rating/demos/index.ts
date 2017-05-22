import {Ng2vdRatingBasic} from './basic/rating-basic';
import {Ng2vdRatingConfig} from './config/rating-config';
import {Ng2vdRatingTemplate} from './template/rating-template';
import {Ng2vdRatingEvents} from './events/rating-events';
import {Ng2vdRatingDecimal} from './decimal/rating-decimal';
import {Ng2vdRatingForm} from './form/rating-form';

export const DEMO_DIRECTIVES = [Ng2vdRatingBasic, Ng2vdRatingConfig,
  Ng2vdRatingTemplate, Ng2vdRatingEvents, Ng2vdRatingDecimal, Ng2vdRatingForm];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/rating-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/rating-basic.html')
  },
  events: {
    code: require('!!prismjs-loader?lang=typescript!./events/rating-events'),
    markup: require('!!prismjs-loader?lang=markup!./events/rating-events.html')
  },
  template: {
    code: require('!!prismjs-loader?lang=typescript!./template/rating-template'),
    markup: require('!!prismjs-loader?lang=markup!./template/rating-template.html')
  },
  decimal: {
    code: require('!!prismjs-loader?lang=typescript!./decimal/rating-decimal'),
    markup: require('!!prismjs-loader?lang=markup!./decimal/rating-decimal.html')
  },
  form: {
    code: require('!!prismjs-loader?lang=typescript!./form/rating-form'),
    markup: require('!!prismjs-loader?lang=markup!./form/rating-form.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/rating-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/rating-config.html')
  }
};
