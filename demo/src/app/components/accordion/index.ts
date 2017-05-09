export * from './accordion.component';

import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdAccordion} from './accordion.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdAccordion],
  declarations: [Ng2vdAccordion, ...DEMO_DIRECTIVES]
})
export class Ng2vdAccordionModule {}
