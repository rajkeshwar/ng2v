import { Component } from '@angular/core';

@Component({
    selector: 'css-utilities',
    template: `
        <ng2vd-content-wrapper component="Utilities">

            <ng2vd-example-box demoTitle="Borders"
                [snippets]="snippets" component="Borders" demo="borders">
                <div [htmlTemplate]="'./utilities/borders.html'"></div>
            </ng2vd-example-box>
            
            <ng2vd-example-box demoTitle="Border radius"
                [snippets]="snippets" component="BorderRadius" demo="borderRadius">
                <div [htmlTemplate]="'./utilities/border-radius.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Colors"
                [snippets]="snippets" component="Colors" demo="colors">
                <div [htmlTemplate]="'./utilities/colors.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Close icon"
                [snippets]="snippets" component="CloseIcon" demo="closeIcon">
                <div [htmlTemplate]="'./utilities/close-icon.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper>
    `,
})
export class UtilitiesComponent {

    snippets = {
        borders: {
            markup: require('!!prismjs-loader?lang=markup!./borders.html')
        },
        borderRadius: {
            markup: require('!!prismjs-loader?lang=markup!./border-radius.html')
        },
        colors: {
            markup: require('!!prismjs-loader?lang=markup!./colors.html')
        },
        closeIcon: {
            markup: require('!!prismjs-loader?lang=markup!./close-icon.html')
        }
    };
}