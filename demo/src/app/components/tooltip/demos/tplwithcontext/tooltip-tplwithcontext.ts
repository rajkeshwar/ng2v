import {Ng2vTooltip} from '@ng2v/ng2v-components';
import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'ng2vd-tooltip-tplwithcontext',
  templateUrl: './tooltip-tplwithcontext.html'
})
export class Ng2vdTooltipTplwithcontext {
  greeting = {};
  name = 'World';

  @ViewChild('t') public tooltip: Ng2vTooltip;

  public changeGreeting(greeting: any): void {
    const isOpen = this.tooltip.isOpen();
    this.tooltip.close();
    if (greeting !== this.greeting || !isOpen) {
      this.greeting = greeting;
      this.tooltip.open(greeting);
    }
  }
}
