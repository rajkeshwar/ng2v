import { Component } from '@angular/core';

@Component({
    selector: 'css-button-groups',
    template: `
        <ng2vd-content-wrapper component="Button Groups">
            <ng2vd-example-box demoTitle="Basic Example"
                [snippets]="snippets" component="Button Groups" demo="basicExample">
                <div [htmlTemplate]="'./button-groups/basic-example.html'"></div>
            </ng2vd-example-box>
            
            <ng2vd-example-box demoTitle="Button Tags"
                [snippets]="snippets" component="Button Tags" demo="buttonTags">
                <div [htmlTemplate]="'./button-groups/button-tags.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Outline Buttons"
                [snippets]="snippets" component="Outline Buttons" demo="outlineButtons">
                <div [htmlTemplate]="'./button-groups/outline-buttons.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Button Toolbar"
                [snippets]="snippets" component="Button Toolbar" demo="buttonToolbar">
                <div [htmlTemplate]="'./button-groups/button-toolbar.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Button Sizing"
                [snippets]="snippets" component="Button Toolbar" demo="buttonSizing">
                <div [htmlTemplate]="'./button-groups/button-sizing.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Vertical Variation"
                [snippets]="snippets" component="Vertical Variation" demo="verticalVariation">
                <div [htmlTemplate]="'./button-groups/vertical-variation.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper>
    `,
})
export class ButtonGroupsComponent {

    snippets = {
        basicExample: {
            markup: require('!!prismjs-loader?lang=markup!./basic-example.html')
        },
        buttonTags: {
            markup: require('!!prismjs-loader?lang=markup!./button-tags.html')
        },
        outlineButtons: {
            markup: require('!!prismjs-loader?lang=markup!./outline-buttons.html')
        },
        buttonToolbar: {
            markup: require('!!prismjs-loader?lang=markup!./button-toolbar.html')
        },
        buttonSizing: {
            markup: require('!!prismjs-loader?lang=markup!./button-sizing.html')
        },
        verticalVariation: {
            markup: require('!!prismjs-loader?lang=markup!./vertical-variation.html')
        }
    };
}