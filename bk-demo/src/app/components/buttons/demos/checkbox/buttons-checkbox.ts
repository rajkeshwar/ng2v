import {Component} from '@angular/core';

@Component({
  selector: 'ng2vd-buttons-checkbox',
  templateUrl: './buttons-checkbox.html'
})
export class Ng2vdButtonsCheckbox {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
