import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-accordion',
  template: `
    <ng2vd-content-wrapper component="Accordion">
      <ng2vd-api-docs directive="Ng2vAccordion"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vPanel"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vPanelTitle"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vPanelContent"></ng2vd-api-docs>
      <ng2vd-api-docs-class type="Ng2vPanelChangeEvent"></ng2vd-api-docs-class>
      <ng2vd-api-docs-config type="Ng2vAccordionConfig"></ng2vd-api-docs-config>
      <ng2vd-example-box demoTitle="Accordion" [snippets]="snippets" component="accordion" demo="basic">
        <ng2vd-accordion-basic></ng2vd-accordion-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="One open panel at a time" [snippets]="snippets" component="accordion" demo="static">
        <ng2vd-accordion-static></ng2vd-accordion-static>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Toggle panels" [snippets]="snippets" component="accordion" demo="toggle">
        <ng2vd-accordion-toggle></ng2vd-accordion-toggle>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Prevent panel toggle" [snippets]="snippets" component="accordion" demo="preventchange">
        <ng2vd-accordion-preventchange></ng2vd-accordion-preventchange>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Global configuration of accordions" [snippets]="snippets" component="accordion" demo="config">
        <ng2vd-accordion-config></ng2vd-accordion-config>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdAccordion {
  snippets = DEMO_SNIPPETS;
}
