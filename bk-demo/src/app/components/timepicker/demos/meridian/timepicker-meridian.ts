import {Component} from '@angular/core';

@Component({
  selector: 'ng2vd-timepicker-meridian',
  templateUrl: './timepicker-meridian.html'
})
export class Ng2vdTimepickerMeridian {
  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
}
