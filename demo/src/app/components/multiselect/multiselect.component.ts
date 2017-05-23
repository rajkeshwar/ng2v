import {Component} from '@angular/core';

@Component({
  selector: 'ng2vd-multiselect',
  template: `
    <ng2vd-content-wrapper component="Multiselect">

      <ng2vd-example-box demoTitle="Multiselect" [snippets]="snippets" component="multiselect" demo="basic">
        <ng2vd-multiselect-basic></ng2vd-multiselect-basic>
      </ng2vd-example-box>

    </ng2vd-content-wrapper> 
  `
})
export class Ng2vdMultiselect {
    public snippets = {
        basic: {
            code: require('!!prismjs-loader?lang=typescript!./demos/basic/multiselect-basic'),
            markup: require('!!prismjs-loader?lang=markup!./demos/basic/multiselect-basic.html')
        }
    };
}
