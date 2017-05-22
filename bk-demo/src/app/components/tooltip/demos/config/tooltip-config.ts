import {Component} from '@angular/core';
import {Ng2vTooltipConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-tooltip-config',
  templateUrl: './tooltip-config.html',
  providers: [Ng2vTooltipConfig] // add Ng2vTooltipConfig to the component providers
})
export class Ng2vdTooltipConfig {
  constructor(config: Ng2vTooltipConfig) {
    // customize default values of tooltips used by this component tree
    config.placement = 'right';
    config.triggers = 'click';
  }
}
