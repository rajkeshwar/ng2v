import {Component} from '@angular/core';
import {Ng2vProgressbarConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-progressbar-config',
  templateUrl: './progressbar-config.html',
  providers: [Ng2vProgressbarConfig] // add the Ng2vProgressbarConfig to the component providers
})
export class Ng2vdProgressbarConfig {
  constructor(config: Ng2vProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
  }
}
