
import {NgModule} from '@angular/core';

import {Ng2vdSharedModule} from '../shared';
import {Ng2vdComponentsSharedModule} from '../components/shared';
import {HtmlTemplateDirective} from './html.template';
import {HttpModule} from '@angular/http';
import {KeyForPipe} from './key-for.pipe';
import { ButtonGroupsComponent } from './button-groups/index';
import { InputGroupsComponent } from './input-groups/index';
import { LabelsComponent } from './labels/index';
import { BadgesComponent } from './badges/index';
import { NavbarsComponent } from './navbars/index';
import { ListGroupsComponent } from './list-groups/index';
import { PanelsComponent } from './panels/index';

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
    LabelsComponent,
    BadgesComponent,
    NavbarsComponent,
    ListGroupsComponent,
    PanelsComponent,
    KeyForPipe
  ],
  declarations: [
    HtmlTemplateDirective, 
    ButtonGroupsComponent,
    InputGroupsComponent,
    LabelsComponent,
    BadgesComponent,
    NavbarsComponent,
    ListGroupsComponent,
    PanelsComponent,
    KeyForPipe
  ]
})
export class Ng2vdCssElementsModule {}
