
import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdMultiselect} from './multiselect.component';
import {Ng2vdMultiselectBasic} from './demos/basic/multiselect-basic';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdMultiselect],
  declarations: [Ng2vdMultiselect, Ng2vdMultiselectBasic]
})
export class Ng2vdMultiselectModule {}