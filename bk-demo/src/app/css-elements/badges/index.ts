import { Component } from '@angular/core';

@Component({
    selector: 'css-badges-groups',
    template: `
        <ng2vd-content-wrapper component="Badges">
            <ng2vd-example-box demoTitle="Basic Example"
                [snippets]="snippets" component="Basic Example" demo="basicExample">
                <div [htmlTemplate]="'./badges/basic-example.html'"></div>
            </ng2vd-example-box>
            
            <ng2vd-example-box demoTitle="Active Nav"
                [snippets]="snippets" component="Active Nav" demo="activeNav">
                <div [htmlTemplate]="'./badges/active-nav.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper>
    `,
})
export class BadgesComponent {

    snippets = {
        basicExample: {
            markup: require('!!prismjs-loader?lang=markup!./basic-example.html')
        },
        activeNav: {
            markup: require('!!prismjs-loader?lang=markup!./active-nav.html')
        }
    };
}