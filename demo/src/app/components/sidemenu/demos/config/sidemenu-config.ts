import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'ng2vd-sidemenu-config',
  templateUrl: './sidemenu-config.html',
})
export class Ng2vdSidemenuConfig implements OnInit {

  public menus: Array<any>;

  ngOnInit() {
      this.menus = [
        {'icon':'fa-home', label: 'Home', callback: this.itemClick},
        {'icon':'fa-line-chart', label: 'TSI', subMenus:[
            {'icon':'fa-line-chart', label: 'Insights', callback: this.itemClick},
            {'icon':'fa-line-chart', label: 'Variance', callback: this.itemClick},
            {'icon':'fa-line-chart', label: 'Advicer', callback: this.itemClick}
        ]},
        {'icon':'fa-dashboard', label: 'Dashboard', callback: this.itemClick},
        {'icon':'fa-list-alt', label: 'AEM', callback: this.itemClick},
    ];
  }

  itemClick( data ) {
    console.log('itemClick : ', data);
  }
}