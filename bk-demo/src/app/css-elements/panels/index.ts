import { Component } from '@angular/core';

@Component({
    selector: 'css-panels-groups',
    template: `
        <ng2vd-content-wrapper component="Panels">
            <ng2vd-example-box demoTitle="Panels"
                [snippets]="snippets" component="Panels" demo="panels">
                <div [htmlTemplate]="'./panels/panels.html'"></div>
            </ng2vd-example-box>
        </ng2vd-content-wrapper>
    `,
})
export class PanelsComponent {

    snippets = {
        panels: {
            markup: require('!!prismjs-loader?lang=markup!./panels.html')
        }
    };
}