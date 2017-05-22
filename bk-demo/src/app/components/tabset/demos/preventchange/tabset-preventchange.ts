import {Component} from '@angular/core';
import {Ng2vTabChangeEvent} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-tabset-preventchange',
  templateUrl: './tabset-preventchange.html'
})
export class Ng2vdTabsetPreventchange {
    public beforeChange($event: Ng2vTabChangeEvent) {
      if ($event.nextId === 'tab-preventchange2') {
        $event.preventDefault();
      }
    };
}
