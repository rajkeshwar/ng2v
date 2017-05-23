export * from './timepicker.component';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdTimepicker} from './timepicker.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdTimepicker],
  declarations: [Ng2vdTimepicker, ...DEMO_DIRECTIVES]
})
export class Ng2vdTimepickerModule {}
