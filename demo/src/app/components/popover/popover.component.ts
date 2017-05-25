import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-popover',
  template: `
    <ng2vd-content-wrapper component="Popover">
      
      <ng2vd-example-box demoTitle="Quick and easy popovers" [snippets]="snippets" component="popover" demo="basic">
        <ng2vd-popover-basic></ng2vd-popover-basic>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="HTML and bindings in popovers" [snippets]="snippets" component="popover" demo="tplcontent">
        <ng2vd-popover-tplcontent></ng2vd-popover-tplcontent>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="Custom and manual triggers" [snippets]="snippets" component="popover" demo="triggers">
        <ng2vd-popover-triggers></ng2vd-popover-triggers>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="Context and manual triggers" [snippets]="snippets" component="popover" demo="tplwithcontext">
        <ng2vd-popover-tplwithcontext></ng2vd-popover-tplwithcontext>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="Popover visibility events" [snippets]="snippets" component="popover" demo="visibility">
        <ng2vd-popover-visibility></ng2vd-popover-visibility>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="Append popover in the body" [snippets]="snippets" component="popover" demo="container">
        <ng2vd-popover-container></ng2vd-popover-container>
      </ng2vd-example-box>
      <ng2vd-example-box
        demoTitle="Global configuration of popovers" [snippets]="snippets" component="popover" demo="config">
        <ng2vd-popover-config></ng2vd-popover-config>
      </ng2vd-example-box>

      <ng2vd-api-docs directive="Ng2vPopover"></ng2vd-api-docs>
      <ng2vd-api-docs-config type="Ng2vPopoverConfig"></ng2vd-api-docs-config>
      
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdPopover {
  snippets = DEMO_SNIPPETS;
}
