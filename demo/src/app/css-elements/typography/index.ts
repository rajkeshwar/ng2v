import { Component } from '@angular/core';

@Component({
    selector: 'css-typography',
    template: `
        <ng2vd-content-wrapper component="Typography">

            <ng2vd-example-box demoTitle="Headings"
                [snippets]="snippets" component="Headings" demo="basicE">
                <div [htmlTemplate]="'./typography/basic-example.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Heading class"
                [snippets]="snippets" component="Headings" demo="headingClass">
                <div [htmlTemplate]="'./typography/heading-class.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Display class"
                [snippets]="snippets" component="Display class" demo="displayClass">
                <div [htmlTemplate]="'./typography/display-class.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Fancy display"
                [snippets]="snippets" component="Fancy display" demo="fancyDisplay">
                <div [htmlTemplate]="'./typography/fancy-display.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Blockquote"
                [snippets]="snippets" component="Blockquote" demo="blockquote">
                <div [htmlTemplate]="'./typography/blockquote.html'"></div>
            </ng2vd-example-box>
            
        </ng2vd-content-wrapper>
    `,
})
export class TypographyComponent {

    snippets = {
        basicExample: {
            markup: require('!!prismjs-loader?lang=markup!./basic-example.html')
        },
        headingClass: {
            markup: require('!!prismjs-loader?lang=markup!./heading-class.html')
        },
        displayClass: {
            markup: require('!!prismjs-loader?lang=markup!./display-class.html')
        },
        fancyDisplay: {
            markup: require('!!prismjs-loader?lang=markup!./fancy-display.html')
        },
        blockquote: {
            markup: require('!!prismjs-loader?lang=markup!./blockquote.html')
        }
    };
}