import { Component } from '@angular/core';

@Component({
    selector: 'css-forms',
    template: `
        <ng2vd-content-wrapper component="Forms">

            <ng2vd-example-box demoTitle="Form Controls"
                [snippets]="snippets" component="Form Controls" demo="formControls">
                <div [htmlTemplate]="'./forms/form-controls.html'"></div>
            </ng2vd-example-box>
            
           <ng2vd-example-box demoTitle="Form Group"
                [snippets]="snippets" component="Form Group" demo="formGroup">
                <div [htmlTemplate]="'./forms/form-group.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Inline Form"
                [snippets]="snippets" component="Inline Form" demo="inlineForm">
                <div [htmlTemplate]="'./forms/inline-form.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Textual Input"
                [snippets]="snippets" component="Textual Input" demo="textualInputs">
                <div [htmlTemplate]="'./forms/textual-inputs.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Control Sizing"
                [snippets]="snippets" component="Textual Input" demo="controlSizing">
                <div [htmlTemplate]="'./forms/control-sizing.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper> 
    `,
})
export class FormsComponent {

    snippets = {
        formControls: {
            markup: require('!!prismjs-loader?lang=markup!./form-controls.html')
        },
        formGroup: {
            markup: require('!!prismjs-loader?lang=markup!./form-group.html')
        },
        inlineForm: {
            markup: require('!!prismjs-loader?lang=markup!./inline-form.html')
        },
        textualInputs: {
            markup: require('!!prismjs-loader?lang=markup!./textual-inputs.html')
        },
        usingGrid: {
            markup: require('!!prismjs-loader?lang=markup!./using-grid.html')
        },
        controlSizing: {
            markup: require('!!prismjs-loader?lang=markup!./control-sizing.html')            
        }
    };
}