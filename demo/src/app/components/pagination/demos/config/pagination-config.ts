import {Component} from '@angular/core';
import {Ng2vPaginationConfig} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-pagination-config',
  templateUrl: './pagination-config.html',
  providers: [Ng2vPaginationConfig] // add Ng2vPaginationConfig to the component providers
})
export class Ng2vdPaginationConfig {
  page = 4;

  constructor(config: Ng2vPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }
}
