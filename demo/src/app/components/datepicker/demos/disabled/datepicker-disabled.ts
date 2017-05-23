import {Component} from '@angular/core';
import {Ng2vDateStruct} from '@ng2v/ng2v-components';

const now = new Date();

@Component({
  selector: 'ng2vd-datepicker-disabled',
  templateUrl: './datepicker-disabled.html'
})
export class Ng2vdDatepickerDisabled {

  model: Ng2vDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  disabled = true;
}
