export * from './popover.component';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdPopover} from './popover.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdPopover],
  declarations: [Ng2vdPopover, ...DEMO_DIRECTIVES]
})
export class Ng2vdPopoverModule {}
