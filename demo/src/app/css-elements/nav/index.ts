import { Component } from '@angular/core';

@Component({
    selector: 'css-navs',
    template: `
        <ng2vd-content-wrapper component="Navs">
            <ng2vd-example-box demoTitle="Basic Example"
                [snippets]="snippets" component="Basic Example" demo="basicExample">
                <div [htmlTemplate]="'./nav/basic-example.html'"></div>
            </ng2vd-example-box>
            
            <ng2vd-example-box demoTitle="Right aligned"
                [snippets]="snippets" component="RightAligned" demo="rightAligned">
                <div [htmlTemplate]="'./nav/right-aligned.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Justified"
                [snippets]="snippets" component="Justified" demo="justified">
                <div [htmlTemplate]="'./nav/nav-justified.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Vertical"
                [snippets]="snippets" component="Vertical" demo="vertical">
                <div [htmlTemplate]="'./nav/vertical.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper>
    `,
})
export class NavsComponent {

    snippets = {
        basicExample: {
            markup: require('!!prismjs-loader?lang=markup!./basic-example.html')
        },
        rightAligned: {
            markup: require('!!prismjs-loader?lang=markup!./right-aligned.html')
        },
        justified: {
            markup: require('!!prismjs-loader?lang=markup!./nav-justified.html')
        },
        vertical: {
            markup: require('!!prismjs-loader?lang=markup!./vertical.html')
        }
    };
}