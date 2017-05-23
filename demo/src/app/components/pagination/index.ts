export * from './pagination.component';

import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdPagination} from './pagination.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdPagination],
  declarations: [Ng2vdPagination, ...DEMO_DIRECTIVES]
})
export class Ng2vdPaginationModule {}
