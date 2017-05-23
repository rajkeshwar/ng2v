import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-progressbar',
  template: `
    <ng2vd-content-wrapper component="Progressbar">
      <ng2vd-api-docs directive="Ng2vProgressbar"></ng2vd-api-docs>
      <ng2vd-api-docs-config type="Ng2vProgressbarConfig"></ng2vd-api-docs-config>
      <ng2vd-example-box demoTitle="Contextual progress bars" [snippets]="snippets" component="progressbar" demo="basic">
        <ng2vd-progressbar-basic></ng2vd-progressbar-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Progress bars with current value labels" [snippets]="snippets" component="progressbar" demo="showvalue">
        <ng2vd-progressbar-showvalue></ng2vd-progressbar-showvalue>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Striped progress bars" [snippets]="snippets" component="progressbar" demo="striped">
        <ng2vd-progressbar-striped></ng2vd-progressbar-striped>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Progress bars with custom labels" [snippets]="snippets" component="progressbar" demo="labels">
        <ng2vd-progressbar-labels></ng2vd-progressbar-labels>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Global configuration of progress bars" [snippets]="snippets" component="progressbar" demo="config">
        <ng2vd-progressbar-config></ng2vd-progressbar-config>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdProgressbar {
  snippets = DEMO_SNIPPETS;
}
