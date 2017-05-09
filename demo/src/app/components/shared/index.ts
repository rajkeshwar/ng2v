import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../../shared';
import {ExampleBoxComponent} from './example-box/example-box.component';
import {Ng2vdApiDocs} from './api-docs/api-docs.component';
import {Ng2vdApiDocsClass} from './api-docs/api-docs-class.component';
import {Ng2vdApiDocsConfig} from './api-docs/api-docs-config.component';
import {Ng2vdFragment} from './fragment/fragment.directive';

@NgModule({
  imports: [Ng2vdSharedModule],
  declarations: [ExampleBoxComponent, Ng2vdApiDocs, Ng2vdApiDocsClass, Ng2vdApiDocsConfig, Ng2vdFragment],
  exports: [ExampleBoxComponent, Ng2vdApiDocs, Ng2vdApiDocsClass, Ng2vdApiDocsConfig, Ng2vdFragment]
})
export class Ng2vdComponentsSharedModule {}
