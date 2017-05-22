import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ng2vd-side-menu',
  template: `
    <ng2vd-content-wrapper component="Sidemenu">

      <ng2vd-example-box demoTitle="Sidemenu basic" [snippets]="snippets" component="sidemenu" demo="basic">
        <ng2vd-sidemenu-basic></ng2vd-sidemenu-basic>
      </ng2vd-example-box>

      <ng2vd-example-box demoTitle="Sidemenu config" [snippets]="snippets" component="sidemenu" demo="config">
        <ng2vd-sidemenu-config></ng2vd-sidemenu-config>
      </ng2vd-example-box>

    </ng2vd-content-wrapper> 
  `
})
export class Ng2vdSidemenu {
  snippets = DEMO_SNIPPETS;
}
