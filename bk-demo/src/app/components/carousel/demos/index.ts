import {Ng2vdCarouselBasic} from './basic/carousel-basic';
import {Ng2vdCarouselConfig} from './config/carousel-config';

export const DEMO_DIRECTIVES = [Ng2vdCarouselBasic, Ng2vdCarouselConfig];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/carousel-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/carousel-basic.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/carousel-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/carousel-config.html')
  }
};
