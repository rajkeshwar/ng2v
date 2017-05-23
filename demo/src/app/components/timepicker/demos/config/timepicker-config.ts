import {Component} from '@angular/core';
import {Ng2vTimepickerConfig} from '@ng2v/ng2v-components';
import {Ng2vTimeStruct} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-timepicker-config',
  templateUrl: './timepicker-config.html',
  providers: [Ng2vTimepickerConfig] // add Ng2vTimepickerConfig to the component providers
})
export class Ng2vdTimepickerConfig {
  time: Ng2vTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(config: Ng2vTimepickerConfig) {
    // customize default values of ratings used by this component tree
    config.seconds = true;
    config.spinners = false;
  }
}
