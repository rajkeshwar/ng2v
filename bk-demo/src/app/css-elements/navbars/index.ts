import { Component } from '@angular/core';

@Component({
    selector: 'css-navbar-groups',
    template: `
        <ng2vd-content-wrapper component="Navbar">
            <ng2vd-example-box demoTitle="Basic Example"
                [snippets]="snippets" component="Basic Example" demo="basicExample">
                <div [htmlTemplate]="'./navbars/basic-example.html'"></div>
            </ng2vd-example-box>
            
            <ng2vd-example-box demoTitle="Navbar Forms"
                [snippets]="snippets" component="Navbar Forms" demo="navForms">
                <div [htmlTemplate]="'./navbars/nav-forms.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Navbar Buttons"
                [snippets]="snippets" component="Navbar Buttons" demo="navButtons">
                <div [htmlTemplate]="'./navbars/nav-buttons.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Navbar Text"
                [snippets]="snippets" component="Navbar Text" demo="navText">
                <div [htmlTemplate]="'./navbars/nav-text.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Navbar Top fixed"
                [snippets]="snippets" component="Navbar Top fixed" demo="topFixed">
                <div [htmlTemplate]="'./navbars/top-fixed.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Navbar Bottom fixed"
                [snippets]="snippets" component="Navbar Bottom fixed" demo="bottomFixed">
                <div [htmlTemplate]="'./navbars/bottom-fixed.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Navbar Inverted"
                [snippets]="snippets" component="Navbar Inverted" demo="navInverted">
                <div [htmlTemplate]="'./navbars/nav-inverted.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper>
    `,
})
export class NavbarsComponent {

    snippets = {
        basicExample: {
            markup: require('!!prismjs-loader?lang=markup!./basic-example.html')
        },
        navForms: {
            markup: require('!!prismjs-loader?lang=markup!./nav-forms.html')
        },
        navButtons: {
            markup: require('!!prismjs-loader?lang=markup!./nav-buttons.html')
        },
        navText: {
            markup: require('!!prismjs-loader?lang=markup!./nav-text.html')
        },
        topFixed: {
            markup: require('!!prismjs-loader?lang=markup!./top-fixed.html')
        },
        bottomFixed: {
            markup: require('!!prismjs-loader?lang=markup!./bottom-fixed.html')
        },
        navInverted: {
            markup: require('!!prismjs-loader?lang=markup!./nav-inverted.html')
        }
    };
}