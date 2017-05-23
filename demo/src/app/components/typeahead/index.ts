export * from './typeahead.component';

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdTypeahead} from './typeahead.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdTypeahead],
  declarations: [Ng2vdTypeahead, ...DEMO_DIRECTIVES]
})
export class Ng2vdTypeaheadModule {}
