
import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../shared';
import {Ng2vdComponentsSharedModule} from '../components/shared';
import {HtmlTemplateDirective} from './html.template';
import {HttpModule} from '@angular/http';
import {KeyForPipe} from './key-for.pipe';
import { ButtonGroupsComponent } from './button-groups/index';
import { InputGroupsComponent } from './input-groups/index';
import { BadgesComponent } from './badges/index';
import { NavbarsComponent } from './navbars/index';
import { ListGroupsComponent } from './list-groups/index';
import { PanelsComponent } from './panels/index';
import { FormsComponent } from './forms/index';
import { TypographyComponent } from './typography/index';
import { TablesComponent } from './tables/index';
import { UtilitiesComponent } from './utilities/index';
import { NavsComponent } from './nav/index';

@NgModule({
  imports: [
    Ng2vdSharedModule, 
    Ng2vdComponentsSharedModule, 
    HttpModule
  ],
  exports: [
    HtmlTemplateDirective, 
    ButtonGroupsComponent,
    InputGroupsComponent,
    NavsComponent,
    BadgesComponent,
    NavbarsComponent,
    ListGroupsComponent,
    PanelsComponent,
    FormsComponent,
    TypographyComponent,
    TablesComponent,
    UtilitiesComponent,
    KeyForPipe
  ],
  declarations: [
    HtmlTemplateDirective, 
    ButtonGroupsComponent,
    InputGroupsComponent,
    NavsComponent,
    BadgesComponent,
    NavbarsComponent,
    ListGroupsComponent,
    PanelsComponent,
    FormsComponent,
    TypographyComponent,
    TablesComponent,
    UtilitiesComponent,
    KeyForPipe
  ]
})
export class Ng2vdCssElementsModule {}
