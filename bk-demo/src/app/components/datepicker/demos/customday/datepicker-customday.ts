import {Component, Input} from '@angular/core';
import {Ng2vDateStruct} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-datepicker-customday',
  templateUrl: './datepicker-customday.html',
  styles: [`
    .custom-day {      
      text-align: center;
      padding: 0.185rem 0.25rem;
      border-radius: 0.25rem;
      display: inline-block;
      width: 2rem;
    }
    .custom-day:hover {
      background-color: #e6e6e6;
    }
    .weekend {
      background-color: #f0ad4e;
      border-radius: 1rem;
      color: white;
    }
    .hidden {
      display: none;
    }
  `]
})
export class Ng2vdDatepickerCustomday {
  model: Ng2vDateStruct;

  isWeekend(date: Ng2vDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: Ng2vDateStruct, current: {month: number}) {
    return date.month !== current.month;
  }
}
