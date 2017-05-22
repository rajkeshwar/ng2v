import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-rating',
  templateUrl: './rating.component.html'
})
export class Ng2vdRating {
  snippets = DEMO_SNIPPETS;
}
