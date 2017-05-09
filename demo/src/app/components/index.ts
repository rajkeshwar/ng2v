export * from './accordion';
// export * from './alert';
// export * from './buttons';
// export * from './carousel';
// export * from './collapse';
// export * from './datepicker';
// export * from './dropdown';
// export * from './modal';
// export * from './pagination';
// export * from './popover';
// export * from './progressbar';
// export * from './rating';
export * from './tabset';
// export * from './timepicker';
// export * from './tooltip';
// export * from './typeahead';

import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../shared';

import {Ng2vdAccordionModule} from './accordion';

@NgModule({
  imports: [
    Ng2vdSharedModule,
    Ng2vdAccordionModule
  ],
  exports: [
    Ng2vdAccordionModule
  ]
})
export class Ng2vdDemoModule {}
