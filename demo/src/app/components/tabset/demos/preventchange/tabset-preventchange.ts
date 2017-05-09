import {Component} from '@angular/core';
import {Ng2vTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

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
