import {Ng2vdProgressbarBasic} from './basic/progressbar-basic';
import {Ng2vdProgressbarShowvalue} from './showvalue/progressbar-showvalue';
import {Ng2vdProgressbarStriped} from './striped/progressbar-striped';
import {Ng2vdProgressbarConfig} from './config/progressbar-config';
import {Ng2vdProgressbarLabels} from './labels/progressbar-labels';

export const DEMO_DIRECTIVES = [
  Ng2vdProgressbarBasic,
  Ng2vdProgressbarShowvalue,
  Ng2vdProgressbarStriped,
  Ng2vdProgressbarConfig,
  Ng2vdProgressbarLabels
];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/progressbar-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/progressbar-basic.html')},
  showvalue: {
    code: require('!!prismjs-loader?lang=typescript!./showvalue/progressbar-showvalue'),
    markup: require('!!prismjs-loader?lang=markup!./showvalue/progressbar-showvalue.html')},
  striped: {
    code: require('!!prismjs-loader?lang=typescript!./striped/progressbar-striped'),
    markup: require('!!prismjs-loader?lang=markup!./striped/progressbar-striped.html')},
  labels: {
    code: require('!!prismjs-loader?lang=typescript!./labels/progressbar-labels'),
    markup: require('!!prismjs-loader?lang=markup!./labels/progressbar-labels.html')},
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/progressbar-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/progressbar-config.html')}
};
