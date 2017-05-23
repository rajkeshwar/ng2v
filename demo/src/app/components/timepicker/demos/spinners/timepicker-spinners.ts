import {Component} from '@angular/core';

@Component({
  selector: 'ng2vd-timepicker-spinners',
  templateUrl: './timepicker-spinners.html'
})
export class Ng2vdTimepickerSpinners {
  time = {hour: 13, minute: 30};
  spinners = true;

  toggleSpinners() {
      this.spinners = !this.spinners;
  }
}
