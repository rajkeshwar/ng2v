import {Component} from '@angular/core';
import {Ng2vCarouselConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-carousel-config',
  templateUrl: './carousel-config.html',
  providers: [Ng2vCarouselConfig] // add Ng2vCarouselConfig to the component providers
})
export class Ng2vdCarouselConfig {
  constructor(config: Ng2vCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }
}
