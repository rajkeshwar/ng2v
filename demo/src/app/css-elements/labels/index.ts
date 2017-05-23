import { Component } from '@angular/core';

@Component({
    selector: 'css-labels-groups',
    template: `
        <ng2vd-content-wrapper component="Labels">
            <ng2vd-example-box demoTitle="Basic Example"
                [snippets]="snippets" component="Basic Example" demo="basicExample">
                <div [htmlTemplate]="'./labels/basic-example.html'"></div>
            </ng2vd-example-box>
            
            <ng2vd-example-box demoTitle="Labels Variations"
                [snippets]="snippets" component="Labels Variations" demo="variation">
                <div [htmlTemplate]="'./labels/labels-variations.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper>
    `,
})
export class LabelsComponent {

    snippets = {
        basicExample: {
            markup: require('!!prismjs-loader?lang=markup!./basic-example.html')
        },
        variation: {
            markup: require('!!prismjs-loader?lang=markup!./labels-variations.html')
        }
    };
}