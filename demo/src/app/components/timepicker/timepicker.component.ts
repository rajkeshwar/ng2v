import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-timepicker',
  template: `
    <ng2vd-content-wrapper component="Timepicker">
      <ng2vd-api-docs directive="Ng2vTimepicker"></ng2vd-api-docs>
      <ng2vd-api-docs-class type="Ng2vTimeStruct"></ng2vd-api-docs-class>
      <ng2vd-api-docs-config type="Ng2vTimepickerConfig"></ng2vd-api-docs-config>
      <ng2vd-example-box demoTitle="Timepicker" [snippets]="snippets" component="timepicker" demo="basic">
        <ng2vd-timepicker-basic></ng2vd-timepicker-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Meridian" [snippets]="snippets" component="timepicker" demo="meridian">
        <ng2vd-timepicker-meridian></ng2vd-timepicker-meridian>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Seconds" [snippets]="snippets" component="timepicker" demo="seconds">
        <ng2vd-timepicker-seconds></ng2vd-timepicker-seconds>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Spinners" [snippets]="snippets" component="timepicker" demo="spinners">
        <ng2vd-timepicker-spinners></ng2vd-timepicker-spinners>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Custom steps" [snippets]="snippets" component="timepicker" demo="steps">
        <ng2vd-timepicker-steps></ng2vd-timepicker-steps>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Custom validation" [snippets]="snippets" component="timepicker" demo="validation">
        <ng2vd-timepicker-validation></ng2vd-timepicker-validation>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Global configuration of timepickers" [snippets]="snippets" component="timepicker" demo="config">
        <ng2vd-timepicker-config></ng2vd-timepicker-config>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdTimepicker {
  snippets = DEMO_SNIPPETS;
}
