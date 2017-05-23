import { Component } from '@angular/core';

@Component({
  selector: 'ng2vd-alert-custom',
  templateUrl: './alert-custom.html',
  styles: [`
    :host >>> .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
})
export class Ng2vdAlertCustom {}
