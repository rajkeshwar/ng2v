import {Ng2vdSidemenuBasic} from './basic/sidemenu-basic';
import { Ng2vdSidemenuConfig } from './config/sidemenu-config';

export const DEMO_DIRECTIVES = [
      Ng2vdSidemenuBasic,
      Ng2vdSidemenuConfig
];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/sidemenu-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/sidemenu-basic.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/sidemenu-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/sidemenu-config.html')
  }
};
