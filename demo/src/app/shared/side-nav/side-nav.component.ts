import { Component } from '@angular/core';
import { Broadcaster } from '../broadcaster';

export const componentsList = [
  'Sidemenu', 'Multiselect', 'Accordion', 'Alert', 'Buttons',
  'Carousel', 'Collapse', 'Datepicker', 'Dropdown',
  'Modal','Pagination', 'Popover', 'Progressbar',
  'Rating', 'Tabs', 'Timepicker', 'Tooltip', 'Typeahead'
];

export const cssElementsList = [
  'Badges', 'Button Groups', 'Input Groups', 'Forms', 
  'Navs', 'Navbar', 'List group', 'Tables', 'Panels', 'Typography', 'Utilities'
];

@Component({
  selector: 'ng2vd-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {

  public components = componentsList;
  public cssElements = cssElementsList;

  public active:string;

  constructor(private broadcaster:Broadcaster) {
    this.active = this.cssElements[0];
  }

  setActiveTab( active ) {
    this.active = active;
    this.broadcaster.broadcast('tabChange', active);
  }

  toElementRoute( elementName ) {
    return elementName.toLowerCase().replace(/ /, '-');
  }
}
