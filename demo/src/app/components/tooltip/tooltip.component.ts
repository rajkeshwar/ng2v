import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-tooltip',
  template: `
    <ng2vd-content-wrapper component="Tooltip">
      <ng2vd-api-docs directive="Ng2vTooltip"></ng2vd-api-docs>
      <ng2vd-api-docs-config type="Ng2vTooltipConfig"></ng2vd-api-docs-config>
      <ng2vd-example-box demoTitle="Quick and easy tooltips" [snippets]="snippets" component="tooltip" demo="basic">
        <ng2vd-tooltip-basic></ng2vd-tooltip-basic>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="HTML and bindings in tooltips" [snippets]="snippets" component="tooltip" demo="tplcontent">
        <ng2vd-tooltip-tplcontent></ng2vd-tooltip-tplcontent>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="Custom and manual triggers" [snippets]="snippets" component="tooltip" demo="triggers">
        <ng2vd-tooltip-triggers></ng2vd-tooltip-triggers>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="Context and manual triggers" [snippets]="snippets" component="tooltip" demo="tplwithcontext">
        <ng2vd-tooltip-tplwithcontext></ng2vd-tooltip-tplwithcontext>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="Append tooltip in the body" [snippets]="snippets" component="tooltip" demo="container">
        <ng2vd-tooltip-container></ng2vd-tooltip-container>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="Global configuration of tooltips" [snippets]="snippets" component="tooltip" demo="config">
        <ng2vd-tooltip-config></ng2vd-tooltip-config>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdTooltip {
  snippets = DEMO_SNIPPETS;
}
