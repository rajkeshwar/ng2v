import {Component} from '@angular/core';
import {Ng2vTabsetConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-tabset-config',
  templateUrl: './tabset-config.html',
  providers: [Ng2vTabsetConfig] // add Ng2vTabsetConfig to the component providers
})
export class Ng2vdTabsetConfig {
  constructor(config: Ng2vTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }
}
