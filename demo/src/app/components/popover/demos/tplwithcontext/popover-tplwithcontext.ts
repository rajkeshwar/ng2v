import {Ng2vPopover} from '@ng2v/ng2v-components';
import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'ng2vd-popover-tplwithcontext',
  templateUrl: './popover-tplwithcontext.html'
})
export class Ng2vdPopoverTplwithcontext {
  greeting = {};
  name = 'World';

  @ViewChild('p') public popover: Ng2vPopover;

  public changeGreeting(greeting: any): void {
    const isOpen = this.popover.isOpen();
    this.popover.close();
    if (greeting !== this.greeting || !isOpen) {
      this.greeting = greeting;
      this.popover.open(greeting);
    }
  }
}
