import { Component } from '@angular/core';

@Component({
    selector: 'css-input-groups',
    template: `
        <ng2vd-content-wrapper component="Input Groups">
            <ng2vd-example-box demoTitle="Basic Example"
                [snippets]="snippets" component="Basic Example" demo="basicExample">
                <div [htmlTemplate]="'./input-groups/basic-example.html'"></div>
            </ng2vd-example-box>
            
            <ng2vd-example-box demoTitle="Input Sizing"
                [snippets]="snippets" component="Input Sizing" demo="inputSizing">
                <div [htmlTemplate]="'./input-groups/input-sizing.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Checkbox Radio"
                [snippets]="snippets" component="Checkbox Radio" demo="checkboxRadio">
                <div [htmlTemplate]="'./input-groups/checkbox-radio.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Multiple Addons"
                [snippets]="snippets" component="MultipleAddons" demo="multipleAddons">
                <div [htmlTemplate]="'./input-groups/multiple-addons.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Button Addons"
                [snippets]="snippets" component="Button Addons" demo="buttonAddons">
                <div [htmlTemplate]="'./input-groups/button-addons.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper>
    `,
})
export class InputGroupsComponent {

    snippets = {
        basicExample: {
            markup: require('!!prismjs-loader?lang=markup!./basic-example.html')
        },
        inputSizing: {
            markup: require('!!prismjs-loader?lang=markup!./input-sizing.html')
        },
        checkboxRadio: {
            markup: require('!!prismjs-loader?lang=markup!./checkbox-radio.html')
        },
        multipleAddons: {
            markup: require('!!prismjs-loader?lang=markup!./multiple-addons.html')
        },
        buttonAddons: {
            markup: require('!!prismjs-loader?lang=markup!./button-addons.html')
        }
    };
}