import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-collapse',
  templateUrl: './collapse.component.html'
})
export class Ng2vdCollapse {
  snippets = DEMO_SNIPPETS;
}
