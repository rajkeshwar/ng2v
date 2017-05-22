export * from './collapse.component';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdCollapse} from './collapse.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdCollapse],
  declarations: [Ng2vdCollapse, ...DEMO_DIRECTIVES]
})
export class Ng2vdCollapseModule {}
