import {Ng2vdTooltipBasic} from './basic/tooltip-basic';
import {Ng2vdTooltipContainer} from './container/tooltip-container';
import {Ng2vdTooltipTplcontent} from './tplcontent/tooltip-tplcontent';
import {Ng2vdTooltipTplwithcontext} from './tplwithcontext/tooltip-tplwithcontext';
import {Ng2vdTooltipTriggers} from './triggers/tooltip-triggers';
import {Ng2vdTooltipConfig} from './config/tooltip-config';

export const DEMO_DIRECTIVES = [
  Ng2vdTooltipBasic,
  Ng2vdTooltipContainer,
  Ng2vdTooltipTplcontent,
  Ng2vdTooltipTriggers,
  Ng2vdTooltipConfig,
  Ng2vdTooltipTplwithcontext
];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/tooltip-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/tooltip-basic.html')
  },
  container: {
    code: require('!!prismjs-loader?lang=typescript!./container/tooltip-container'),
    markup: require('!!prismjs-loader?lang=markup!./container/tooltip-container.html')
  },
  tplcontent: {
    code: require('!!prismjs-loader?lang=typescript!./tplcontent/tooltip-tplcontent'),
    markup: require('!!prismjs-loader?lang=markup!./tplcontent/tooltip-tplcontent.html')
  },
  triggers: {
    code: require('!!prismjs-loader?lang=typescript!./triggers/tooltip-triggers'),
    markup: require('!!prismjs-loader?lang=markup!./triggers/tooltip-triggers.html')
  },
  tplwithcontext: {
    code: require('!!prismjs-loader?lang=typescript!./tplwithcontext/tooltip-tplwithcontext'),
    markup: require('!!prismjs-loader?lang=markup!./tplwithcontext/tooltip-tplwithcontext.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/tooltip-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/tooltip-config.html')
  }
};
