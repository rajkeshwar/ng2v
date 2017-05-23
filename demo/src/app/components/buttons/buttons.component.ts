import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-buttons',
  template: `
    <ng2vd-content-wrapper component="Buttons">
      <ng2vd-api-docs directive="Ng2vRadioGroup"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vRadio"></ng2vd-api-docs>
      <ng2vd-example-box demoTitle="Radio buttons" [snippets]="snippets" component="buttons" demo="radio">
        <ng2vd-buttons-radio></ng2vd-buttons-radio>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Radio buttons (Reactive Forms)" [snippets]="snippets" component="buttons" demo="radioReactive">
        <ng2vd-buttons-radio-reactive></ng2vd-buttons-radio-reactive>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Checkbox buttons" [snippets]="snippets" component="buttons" demo="checkbox">
        <ng2vd-buttons-checkbox></ng2vd-buttons-checkbox>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Checkbox buttons (Reactive Forms)" [snippets]="snippets" component="buttons" demo="checkboxReactive">
        <ng2vd-buttons-checkbox-reactive></ng2vd-buttons-checkbox-reactive>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdButtons {
   snippets = DEMO_SNIPPETS;
}
