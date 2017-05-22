export * from './rating.component';

import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdRating} from './rating.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdRating],
  declarations: [Ng2vdRating, ...DEMO_DIRECTIVES]
})
export class Ng2vdRatingModule {}
