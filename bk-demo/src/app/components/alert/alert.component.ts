import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-alert',
  template: `
    <ng2vd-content-wrapper component="Alert">
      <ng2vd-api-docs directive="Ng2vAlert"></ng2vd-api-docs>
      <ng2vd-api-docs-config type="Ng2vAlertConfig"></ng2vd-api-docs-config>
      <ng2vd-example-box demoTitle="Basic Alert" [snippets]="snippets" component="alert" demo="basic">
        <ng2vd-alert-basic></ng2vd-alert-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Closeable Alert" [snippets]="snippets" component="alert" demo="closeable">
        <ng2vd-alert-closeable></ng2vd-alert-closeable>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Self-Closing Alert" [snippets]="snippets" component="alert" demo="selfclosing">
        <ng2vd-alert-selfclosing></ng2vd-alert-selfclosing>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Custom Alert" [snippets]="snippets" component="alert" demo="custom">
        <ng2vd-alert-custom></ng2vd-alert-custom>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Global configuration of alerts" [snippets]="snippets" component="alert" demo="config">
        <ng2vd-alert-config></ng2vd-alert-config>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdAlert {
   snippets = DEMO_SNIPPETS;
}
