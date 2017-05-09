import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DefaultComponent} from './default';
import {GettingStarted} from './getting-started';

import {
  Ng2vdAccordion
} from './components';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: DefaultComponent},
  {path: 'getting-started', component: GettingStarted},
  {path: 'components', redirectTo: 'components/accordion'},
  {path: 'components/accordion', component: Ng2vdAccordion}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
