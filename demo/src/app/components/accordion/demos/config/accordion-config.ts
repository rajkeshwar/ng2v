import {Component} from '@angular/core';
import {Ng2vAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ng2vd-accordion-config',
  templateUrl: './accordion-config.html',
  providers: [Ng2vAccordionConfig] // add the NgbAccordionConfig to the component providers
})
export class Ng2vdAccordionConfig {
  constructor(config: Ng2vAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';
  }
}
