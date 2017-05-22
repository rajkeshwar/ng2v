import {Component, Input} from '@angular/core';
import {Ng2vAlertConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-alert-config',
  templateUrl: './alert-config.html',
  // add Ng2vAlertConfig  to the component providers
  providers: [Ng2vAlertConfig]
})
export class Ng2vdAlertConfig {
  @Input() public alerts: Array<string> = [];

  constructor(alertConfig: Ng2vAlertConfig) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }
}
