import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-typeahead',
  template: `
    <ng2vd-content-wrapper component="Typeahead">
      
      <ng2vd-example-box demoTitle="Simple Typeahead" [snippets]="snippets" component="typeahead" demo="basic">
        <ng2vd-typeahead-basic></ng2vd-typeahead-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Formatted results" [snippets]="snippets" component="typeahead" demo="format">
        <ng2vd-typeahead-format></ng2vd-typeahead-format>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Wikipedia search" [snippets]="snippets" component="typeahead" demo="http">
        <ng2vd-typeahead-http></ng2vd-typeahead-http>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Template for results" [snippets]="snippets" component="typeahead" demo="template">
        <ng2vd-typeahead-template></ng2vd-typeahead-template>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Global configuration of typeaheads" [snippets]="snippets" component="typeahead" demo="config">
        <ng2vd-typeahead-config></ng2vd-typeahead-config>
      </ng2vd-example-box>

      <ng2vd-api-docs directive="Ng2vTypeahead"></ng2vd-api-docs>
      <ng2vd-api-docs-class type="Ng2vTypeaheadSelectItemEvent"></ng2vd-api-docs-class>
      <ng2vd-api-docs-class type="ResultTemplateContext"></ng2vd-api-docs-class>
      <ng2vd-api-docs-config type="Ng2vTypeaheadConfig"></ng2vd-api-docs-config>
      
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdTypeahead {
  snippets = DEMO_SNIPPETS;
}
