
export * from './sidemenu';
export * from './accordion';
export * from './alert';
export * from './buttons';
export * from './carousel';
export * from './collapse';
export * from './datepicker';
export * from './dropdown';
export * from './modal';
export * from './pagination';
export * from './popover';
export * from './progressbar';
export * from './rating';
export * from './tabset';
export * from './timepicker';
export * from './tooltip';
export * from './typeahead';

import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../shared';


import {Ng2vdAccordionModule} from './accordion';
import {Ng2vdAlertModule} from './alert';
import {Ng2vdButtonsModule} from './buttons';
import {Ng2vdCarouselModule} from './carousel';
import {Ng2vdCollapseModule} from './collapse';
import {Ng2vdDatepickerModule} from './datepicker';
import {Ng2vdDropdownModule} from './dropdown';
import {Ng2vdModalModule} from './modal';
import {Ng2vdPaginationModule} from './pagination';
import {Ng2vdPopoverModule} from './popover';
import {Ng2vdProgressbarModule} from './progressbar';
import {Ng2vdRatingModule} from './rating';
import {Ng2vdTabsModule} from './tabset';
import {Ng2vdTimepickerModule} from './timepicker';
import {Ng2vdTooltipModule} from './tooltip';
import {Ng2vdTypeaheadModule} from './typeahead';
import { Ng2vdSidemenuModule } from './sidemenu/index';
import { Ng2vdMultiselectModule } from './multiselect/index';

@NgModule({
  imports: [
    Ng2vdSharedModule,
    Ng2vdAccordionModule,
    Ng2vdAlertModule,
    Ng2vdButtonsModule,
    Ng2vdCarouselModule,
    Ng2vdCollapseModule,
    Ng2vdDatepickerModule,
    Ng2vdDropdownModule,
    Ng2vdModalModule,
    Ng2vdPaginationModule,
    Ng2vdPopoverModule,
    Ng2vdProgressbarModule,
    Ng2vdRatingModule,
    Ng2vdTabsModule,
    Ng2vdTimepickerModule,
    Ng2vdTooltipModule,
    Ng2vdTypeaheadModule,
    Ng2vdSidemenuModule,
    Ng2vdMultiselectModule
  ],
  exports: [
    Ng2vdAccordionModule,
    Ng2vdAlertModule,
    Ng2vdButtonsModule,
    Ng2vdCarouselModule,
    Ng2vdCollapseModule,
    Ng2vdDatepickerModule,
    Ng2vdDropdownModule,
    Ng2vdModalModule,
    Ng2vdPaginationModule,
    Ng2vdPopoverModule,
    Ng2vdProgressbarModule,
    Ng2vdRatingModule,
    Ng2vdTabsModule,
    Ng2vdTimepickerModule,
    Ng2vdTooltipModule,
    Ng2vdTypeaheadModule,
    Ng2vdSidemenuModule,
    Ng2vdMultiselectModule
  ]
})
export class Ng2vdDemoModule {}
