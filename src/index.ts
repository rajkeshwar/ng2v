import {NgModule, ModuleWithProviders} from '@angular/core';

import {Ng2vAccordionModule, Ng2vPanelChangeEvent} from './accordion/accordion.module';
import {Ng2vTabsetModule, Ng2vTabChangeEvent} from './tabset/tabset.module';
import {Ng2vCollapseModule} from './collapse/collapse.module';

export {Ng2vCollapseModule, Ng2vCollapse} from './collapse/collapse.module';

export {
  Ng2vAccordionModule,
  Ng2vPanelChangeEvent,
  Ng2vAccordionConfig,
  Ng2vAccordion,
  Ng2vPanel,
  Ng2vPanelTitle,
  Ng2vPanelContent
} from './accordion/accordion.module';

export {
  Ng2vTabsetModule,
  Ng2vTabChangeEvent,
  Ng2vTabsetConfig,
  Ng2vTabset,
  Ng2vTab,
  Ng2vTabContent,
  Ng2vTabTitle
} from './tabset/tabset.module';

const NG2V_MODULES = [Ng2vAccordionModule, Ng2vTabsetModule, Ng2vCollapseModule];

@NgModule({
  imports: [Ng2vAccordionModule.forRoot(), Ng2vTabsetModule.forRoot(), Ng2vCollapseModule.forRoot()],
  exports: NG2V_MODULES
})
export class Ng2vRootModule {
}

@NgModule({imports: NG2V_MODULES, exports: NG2V_MODULES})
export class Ng2vModule {
  static forRoot(): ModuleWithProviders { return {ngModule: Ng2vRootModule}; }
}
