import {Component} from '@angular/core';
import {Ng2vPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ng2vd-accordion-preventchange',
  templateUrl: './accordion-preventchange.html',
})
export class Ng2vdAccordionPreventchange {
  public beforeChange($event: Ng2vPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  };
}
