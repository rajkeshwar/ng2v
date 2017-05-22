import {Component} from '@angular/core';
import {Ng2vDatepickerConfig, Ng2vDateStruct} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-datepicker-config',
  templateUrl: './datepicker-config.html',
  providers: [Ng2vDatepickerConfig] // add Ng2vDatepickerConfig to the component providers
})
export class Ng2vdDatepickerConfig {

  model;

  constructor(config: Ng2vDatepickerConfig) {
    // customize default values of datepickers used by this component tree
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    config.markDisabled = (date: Ng2vDateStruct) => {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    };
  }
}
