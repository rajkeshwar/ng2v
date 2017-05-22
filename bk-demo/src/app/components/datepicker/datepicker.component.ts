import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-datepicker',
  template: `
    <ng2vd-content-wrapper component="Datepicker">
      <ng2vd-api-docs directive="Ng2vDatepicker"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vInputDatepicker"></ng2vd-api-docs>
      <ng2vd-api-docs-class type="Ng2vDateStruct"></ng2vd-api-docs-class>
      <ng2vd-api-docs-class type="DayTemplateContext"></ng2vd-api-docs-class>
      <ng2vd-api-docs-class type="Ng2vDatepickerNavigateEvent"></ng2vd-api-docs-class>
      <ng2vd-api-docs-class type="Ng2vDatepickerI18n"></ng2vd-api-docs-class>
      <ng2vd-api-docs-class type="Ng2vDateParserFormatter"></ng2vd-api-docs-class>
      <ng2vd-api-docs-config type="Ng2vDatepickerConfig"></ng2vd-api-docs-config>
      <ng2vd-example-box demoTitle="Basic datepicker" [snippets]="snippets" component="datepicker" demo="basic">
        <ng2vd-datepicker-basic></ng2vd-datepicker-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Datepicker in a popup" [snippets]="snippets" component="datepicker" demo="popup">
        <ng2vd-datepicker-popup></ng2vd-datepicker-popup>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Multiple months" [snippets]="snippets" component="datepicker" demo="multiple">
        <ng2vd-datepicker-multiple></ng2vd-datepicker-multiple>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Disabled datepicker" [snippets]="snippets" component="datepicker" demo="disabled">
        <ng2vd-datepicker-disabled></ng2vd-datepicker-disabled>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Internationalization of datepickers" [snippets]="snippets" component="datepicker" demo="i18n">
        <ng2vd-datepicker-i18n></ng2vd-datepicker-i18n>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Custom day view" [snippets]="snippets" component="datepicker" demo="customday">
        <ng2vd-datepicker-customday></ng2vd-datepicker-customday>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Alternative calendars" [snippets]="snippets" component="datepicker" demo="calendars">
        <ng2vd-datepicker-calendars></ng2vd-datepicker-calendars>
      </ng2vd-example-box>      
      <ng2vd-example-box demoTitle="Global configuration of datepickers" [snippets]="snippets" component="datepicker" demo="config">
        <ng2vd-datepicker-config></ng2vd-datepicker-config>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdDatepicker {
   snippets = DEMO_SNIPPETS;
}
