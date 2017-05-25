import { Component } from '@angular/core';

@Component({
    selector: 'css-badges-groups',
    template: `
        <ng2vd-content-wrapper component="Badges">

            <ng2vd-example-box demoTitle="Basic Example"
                [snippets]="snippets" component="Basic Example" demo="basicExample">
                <div [htmlTemplate]="'./badges/basic-example.html'"></div>
            </ng2vd-example-box>
            
            <ng2vd-example-box demoTitle="Badge variation"
                [snippets]="snippets" component="BadgeVariation" demo="badgeVariation">
                <div [htmlTemplate]="'./badges/badge-variation.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Pill badges"
                [snippets]="snippets" component="PillBadges" demo="pillBadges">
                <div [htmlTemplate]="'./badges/pill-badges.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper>
    `,
})
export class BadgesComponent {

    snippets = {
        basicExample: {
            markup: require('!!prismjs-loader?lang=markup!./basic-example.html')
        },
        badgeVariation: {
            markup: require('!!prismjs-loader?lang=markup!./badge-variation.html')
        },
        pillBadges: {
            markup: require('!!prismjs-loader?lang=markup!./pill-badges.html')
        }
    };
}