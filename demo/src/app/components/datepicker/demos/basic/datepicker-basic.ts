import {Component} from '@angular/core';
import {Ng2vDateStruct} from '@ng2v/ng2v-components';

const now = new Date();

@Component({
  selector: 'ng2vd-datepicker-basic',
  templateUrl: './datepicker-basic.html'
})
export class Ng2vdDatepickerBasic {

  model: Ng2vDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
