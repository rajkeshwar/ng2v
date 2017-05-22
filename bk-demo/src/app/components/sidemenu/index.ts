export * from './sidemenu.component';

import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {Ng2vdSidemenu} from './sidemenu.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdSidemenu],
  declarations: [Ng2vdSidemenu, ...DEMO_DIRECTIVES]
})
export class Ng2vdSidemenuModule {}
