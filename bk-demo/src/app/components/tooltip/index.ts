export * from './tooltip.component';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdTooltip} from './tooltip.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdTooltip],
  declarations: [Ng2vdTooltip, ...DEMO_DIRECTIVES]
})
export class Ng2vdTooltipModule {}
