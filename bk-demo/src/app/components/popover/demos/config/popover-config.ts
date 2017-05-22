import {Component} from '@angular/core';
import {Ng2vPopoverConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-popover-config',
  templateUrl: './popover-config.html',
  providers: [Ng2vPopoverConfig] // add Ng2vPopoverConfig to the component providers
})
export class Ng2vdPopoverConfig {
  constructor(config: Ng2vPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'right';
    config.triggers = 'hover';
  }
}
