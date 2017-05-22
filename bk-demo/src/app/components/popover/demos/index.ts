import {Ng2vdPopoverBasic} from './basic/popover-basic';
import {Ng2vdPopoverTplcontent} from './tplcontent/popover-tplcontent';
import {Ng2vdPopoverTplwithcontext} from './tplwithcontext/popover-tplwithcontext';
import {Ng2vdPopoverTriggers} from './triggers/popover-triggers';
import {Ng2vdPopoverVisibility} from './visibility/popover-visibility';
import {Ng2vdPopoverContainer} from './container/popover-container';
import {Ng2vdPopoverConfig} from './config/popover-config';

export const DEMO_DIRECTIVES = [
  Ng2vdPopoverBasic,
  Ng2vdPopoverTplcontent,
  Ng2vdPopoverTplwithcontext,
  Ng2vdPopoverTriggers,
  Ng2vdPopoverVisibility,
  Ng2vdPopoverContainer,
  Ng2vdPopoverConfig
];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs-loader?lang=typescript!./basic/popover-basic'),
    markup: require('!!prismjs-loader?lang=markup!./basic/popover-basic.html')
  },
  tplcontent: {
    code: require('!!prismjs-loader?lang=typescript!./tplcontent/popover-tplcontent'),
    markup: require('!!prismjs-loader?lang=markup!./tplcontent/popover-tplcontent.html')
  },
  triggers: {
    code: require('!!prismjs-loader?lang=typescript!./triggers/popover-triggers'),
    markup: require('!!prismjs-loader?lang=markup!./triggers/popover-triggers.html')
  },
  tplwithcontext: {
    code: require('!!prismjs-loader?lang=typescript!./tplwithcontext/popover-tplwithcontext'),
    markup: require('!!prismjs-loader?lang=markup!./tplwithcontext/popover-tplwithcontext.html')
  },
  visibility: {
    code: require('!!prismjs-loader?lang=typescript!./visibility/popover-visibility'),
    markup: require('!!prismjs-loader?lang=markup!./visibility/popover-visibility.html')
  },
  container: {
    code: require('!!prismjs-loader?lang=typescript!./container/popover-container'),
    markup: require('!!prismjs-loader?lang=markup!./container/popover-container.html')
  },
  config: {
    code: require('!!prismjs-loader?lang=typescript!./config/popover-config'),
    markup: require('!!prismjs-loader?lang=markup!./config/popover-config.html')
  }
};
