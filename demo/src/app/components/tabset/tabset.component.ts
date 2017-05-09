import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-tabs',
  template: `
    <ng2vd-content-wrapper component="Tabs">
      <ng2vd-api-docs directive="Ng2vTabset"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vTab"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vTabTitle"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vTabContent"></ng2vd-api-docs>
      <ng2vd-api-docs-class type="Ng2vTabChangeEvent"></ng2vd-api-docs-class>
      <ng2vd-api-docs-config type="Ng2vTabsetConfig"></ng2vd-api-docs-config>
      <ng2vd-example-box demoTitle="Tabset" [snippets]="snippets" component="tabset" demo="basic">
        <ng2vd-tabset-basic></ng2vd-tabset-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Pills" [snippets]="snippets" component="tabset" demo="pills">
        <ng2vd-tabset-pills></ng2vd-tabset-pills>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Select an active tab by id" [snippets]="snippets" component="tabset" demo="selectbyid">
        <ng2vd-tabset-selectbyid></ng2vd-tabset-selectbyid>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Prevent tab change" [snippets]="snippets" component="tabset" demo="preventchange">
        <ng2vd-tabset-preventchange></ng2vd-tabset-preventchange>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Global configuration of tabs" [snippets]="snippets" component="tabset" demo="config">
        <ng2vd-tabset-config></ng2vd-tabset-config>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdTabs {
  snippets = DEMO_SNIPPETS;
}
