import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonpModule} from '@angular/http';

import {Ng2vModule} from '@ng2v/ng2v-components';

import {ContentWrapper} from './content-wrapper/content-wrapper.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {Analytics} from './analytics/analytics';
import { Broadcaster } from './broadcaster';

export {componentsList, cssElementsList} from './side-nav/side-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    ContentWrapper,
    SideNavComponent,
    Ng2vModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule
  ],
  declarations: [
    ContentWrapper,
    SideNavComponent
  ],
  providers: [Analytics, Broadcaster]
})
export class Ng2vdSharedModule {
}
