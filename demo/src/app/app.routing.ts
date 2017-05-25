import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DefaultComponent} from './default';
import {GettingStarted} from './getting-started';
import { ButtonGroupsComponent } from './css-elements/button-groups/index';
import { InputGroupsComponent } from './css-elements/input-groups/index';
import { BadgesComponent } from './css-elements/badges/index';
import { NavbarsComponent } from './css-elements/navbars/index';
import { ListGroupsComponent } from './css-elements/list-groups/index';
import { PanelsComponent } from './css-elements/panels/index';
import { Ng2vdSidemenu } from './components/sidemenu/sidemenu.component';
import { Ng2vdMultiselect } from './components/multiselect/multiselect.component';
import { FormsComponent } from './css-elements/forms/index';
import { TypographyComponent } from './css-elements/typography/index';
import { TablesComponent } from './css-elements/tables/index';
import { UtilitiesComponent } from './css-elements/utilities/index';
import { NavsComponent } from './css-elements/nav/index';

import {
  Ng2vdAccordion,
  Ng2vdAlert,
  Ng2vdButtons,
  Ng2vdCarousel,
  Ng2vdCollapse,
  Ng2vdDatepicker,
  Ng2vdDropdown,
  Ng2vdModal,
  Ng2vdPagination,
  Ng2vdPopover,
  Ng2vdProgressbar,
  Ng2vdRating,
  Ng2vdTabs,
  Ng2vdTimepicker,
  Ng2vdTooltip,
  Ng2vdTypeahead
} from './components';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: DefaultComponent},
  {path: 'getting-started', component: GettingStarted},

  {path: 'elements', redirectTo: 'elements/badges'},
  {path: 'elements/navs', component: NavsComponent},
  {path: 'elements/badges', component: BadgesComponent},  
  {path: 'elements/button-groups', component: ButtonGroupsComponent},
  {path: 'elements/input-groups', component: InputGroupsComponent},
  {path: 'elements/forms', component: FormsComponent},    
  {path: 'elements/navbar', component: NavbarsComponent},
  {path: 'elements/list-group', component: ListGroupsComponent},
  {path: 'elements/panels', component: PanelsComponent},
  {path: 'elements/typography', component: TypographyComponent},
  {path: 'elements/tables', component: TablesComponent},
  {path: 'elements/utilities', component: UtilitiesComponent},
  
  {path: 'components', redirectTo: 'components/sidemenu'},
  {path: 'components/sidemenu', component: Ng2vdSidemenu},  
  {path: 'components/multiselect', component: Ng2vdMultiselect},    
  {path: 'components/accordion', component: Ng2vdAccordion},
  {path: 'components/alert', component: Ng2vdAlert},
  {path: 'components/buttons', component: Ng2vdButtons},
  {path: 'components/carousel', component: Ng2vdCarousel},
  {path: 'components/collapse', component: Ng2vdCollapse},
  {path: 'components/datepicker', component: Ng2vdDatepicker},
  {path: 'components/dropdown', component: Ng2vdDropdown},
  {path: 'components/modal', component: Ng2vdModal},
  {path: 'components/pagination', component: Ng2vdPagination},
  {path: 'components/popover', component: Ng2vdPopover},
  {path: 'components/progressbar', component: Ng2vdProgressbar},
  {path: 'components/rating', component: Ng2vdRating},
  {path: 'components/tabs', component: Ng2vdTabs},
  {path: 'components/timepicker', component: Ng2vdTimepicker},
  {path: 'components/tooltip', component: Ng2vdTooltip},
  {path: 'components/typeahead', component: Ng2vdTypeahead}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
