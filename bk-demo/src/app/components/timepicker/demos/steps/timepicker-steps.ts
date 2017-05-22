import {Component} from '@angular/core';
import {Ng2vTimeStruct} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-timepicker-steps',
  templateUrl: './timepicker-steps.html'
})
export class Ng2vdTimepickerSteps {
  time: Ng2vTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
}
