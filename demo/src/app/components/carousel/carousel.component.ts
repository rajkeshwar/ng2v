import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-carousel',
  template: `
    <ng2vd-content-wrapper component="Carousel">
      <ng2vd-api-docs directive="Ng2vCarousel"></ng2vd-api-docs>
      <ng2vd-api-docs directive="Ng2vSlide"></ng2vd-api-docs>
      <ng2vd-api-docs-config type="Ng2vCarouselConfig"></ng2vd-api-docs-config>
      <ng2vd-example-box demoTitle="Carousel" [snippets]="snippets" component="carousel" demo="basic">
        <ng2vd-carousel-basic></ng2vd-carousel-basic>
      </ng2vd-example-box>
      <ng2vd-example-box demoTitle="Global configuration of carousels" [snippets]="snippets" component="carousel" demo="config">
        <ng2vd-carousel-config></ng2vd-carousel-config>
      </ng2vd-example-box>
    </ng2vd-content-wrapper>
  `
})
export class Ng2vdCarousel {
  snippets = DEMO_SNIPPETS;
}
