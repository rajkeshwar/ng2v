import {Component} from '@angular/core';

import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-modal',
  template: `
    <ng2vd-content-wrapper component="Modal">
      <ng2vd-api-docs-class type="Ng2vModal"></ng2vd-api-docs-class>
      <ng2vd-api-docs-class type="Ng2vModalOptions"></ng2vd-api-docs-class>
      <ng2vd-api-docs-class type="Ng2vModalRef"></ng2vd-api-docs-class>
      <ng2vd-api-docs-class type="Ng2vActiveModal"></ng2vd-api-docs-class>
      <ng2vd-example-box demoTitle="Modal with default options" [snippets]="snippets" component="modal" demo="basic">
          <ng2vd-modal-basic></ng2vd-modal-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Components as content" [snippets]="snippets" component="modal" demo="component">
          <ng2vd-modal-component></ng2vd-modal-component>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Modal with custom class" [snippets]="snippets" component="modal" demo="customclass">
          <ng2vd-modal-customclass></ng2vd-modal-customclass>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdModal {
  snippets = DEMO_SNIPPETS;
}
