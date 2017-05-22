import {Component} from '@angular/core';
import {Ng2vRatingConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-rating-config',
  templateUrl: './rating-config.html',
  providers: [Ng2vRatingConfig] // add Ng2vRatingConfig to the component providers
})
export class Ng2vdRatingConfig {
  constructor(config: Ng2vRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }
}
