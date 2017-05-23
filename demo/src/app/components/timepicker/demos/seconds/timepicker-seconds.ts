import {Component} from '@angular/core';
import {Ng2vTimeStruct} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-timepicker-seconds',
  templateUrl: './timepicker-seconds.html'
})
export class Ng2vdTimepickerSeconds {
  time: Ng2vTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }
}
