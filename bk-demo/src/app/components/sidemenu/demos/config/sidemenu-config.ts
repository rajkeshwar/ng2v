import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2vd-sidemenu-config',
  templateUrl: './sidemenu-config.html',
})
export class Ng2vdSidemenuConfig implements OnInit {

  public menus:Array<any>;

  ngOnInit() {
      this.menus = [
        {'icon':'fa-home', label: 'Home', href:'keymetrics'},
        {'icon':'fa-line-chart', label: 'TSI', subMenus:[
            {'icon':'fa-line-chart', label: 'Insights'},
            {'icon':'fa-line-chart', label: 'Variance'},
            {'icon':'fa-line-chart', label: 'Advicer'}
        ]},
        {'icon':'fa-dashboard', label: 'Dashboard', href:'http://.../workbench'},
        {'icon':'fa-list-alt', label: 'AEM', href:'http://10.10.10.108:7080/'},
    ];
  }

}
