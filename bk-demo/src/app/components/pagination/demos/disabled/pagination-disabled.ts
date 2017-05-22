import {Component} from '@angular/core';
import {Ng2vPaginationConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-pagination-disabled',
  templateUrl: './pagination-disabled.html'
})
export class Ng2vdPaginationDisabled {
  page = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
