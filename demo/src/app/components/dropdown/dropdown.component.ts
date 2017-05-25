import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-dropdown',
  template: `
    <ng2vd-content-wrapper component="Dropdown">
      
      <ng2vd-example-box demoTitle="Dropdown" [snippets]="snippets" component="dropdown" demo="basic">
        <ng2vd-dropdown-basic></ng2vd-dropdown-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Manual triggers" [snippets]="snippets" component="dropdown" demo="manual">
        <ng2vd-dropdown-manual></ng2vd-dropdown-manual>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Global configuration of dropdowns" [snippets]="snippets" component="dropdown" demo="config">
        <ng2vd-dropdown-config></ng2vd-dropdown-config>
      </ng2vd-example-box>

      <ng2vd-api-docs directive="Ng2vDropdown"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vDropdownToggle"></ng2vd-api-docs>
      <ng2vd-api-docs-config type="Ng2vDropdownConfig"></ng2vd-api-docs-config>
      
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdDropdown {
  snippets = DEMO_SNIPPETS;
}
