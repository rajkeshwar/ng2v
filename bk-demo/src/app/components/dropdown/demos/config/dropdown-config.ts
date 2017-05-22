import {Component} from '@angular/core';
import {Ng2vDropdownConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-dropdown-config',
  templateUrl: './dropdown-config.html',
  providers: [Ng2vDropdownConfig] // add Ng2vDropdownConfig to the component providers
})
export class Ng2vdDropdownConfig {
  constructor(config: Ng2vDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.up = true;
    config.autoClose = false;
  }
}
