export * from './datepicker.component';

import {NgModule} from '@angular/core';
import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdDatepicker} from './datepicker.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdDatepicker],
  declarations: [Ng2vdDatepicker, ...DEMO_DIRECTIVES],
})
export class Ng2vdDatepickerModule {}
