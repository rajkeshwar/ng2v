export * from './modal.component';

import {NgModule} from '@angular/core';
import {Ng2vdModal} from './modal.component';
import {Ng2vdSharedModule} from '../../shared';
import {Ng2vdComponentsSharedModule} from '../shared';
import {DEMO_DIRECTIVES, Ng2vdModalContent} from './demos';

@NgModule({
  imports: [Ng2vdSharedModule, Ng2vdComponentsSharedModule],
  exports: [Ng2vdModal],
  entryComponents: [Ng2vdModalContent],
  declarations: [Ng2vdModal, Ng2vdModalContent, ...DEMO_DIRECTIVES]
})
export class Ng2vdModalModule {}
