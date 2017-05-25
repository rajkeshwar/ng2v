import { Component } from '@angular/core';

@Component({
    selector: 'css-tables',
    template: `
        <ng2vd-content-wrapper component="Table">
            <p class="text-right">
                <button class="btn btn-primary" (click)="toggleInverse()">Toggle inverse</button>
            </p>
            <ng2vd-example-box demoTitle="Basic table"
                [snippets]="snippets" component="Basic" demo="basicExample">
                <div [htmlTemplate]="'./tables/basic-example.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Table head options"
                [snippets]="snippets" component="TableHead" demo="tableHeadOptions">
                <div [htmlTemplate]="'./tables/table-head-options.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Bordered table"
                [snippets]="snippets" component="Bordered" demo="borderedTable">
                <div [htmlTemplate]="'./tables/bordered-table.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Stripped rows"
                [snippets]="snippets" component="Stripped" demo="strippedRows">
                <div [htmlTemplate]="'./tables/stripped-rows.html'"></div>
            </ng2vd-example-box>

            <ng2vd-example-box demoTitle="Hoverable Rows"
                [snippets]="snippets" component="Hoverable" demo="hoverableRows">
                <div [htmlTemplate]="'./tables/hoverable-rows.html'"></div>
            </ng2vd-example-box>
            
            <ng2vd-example-box demoTitle="Small table"
                [snippets]="snippets" component="SmallTable" demo="smallTable">
                <div [htmlTemplate]="'./tables/small-table.html'"></div>
            </ng2vd-example-box>

        </ng2vd-content-wrapper>
    `,
})
export class TablesComponent {

    snippets = {
        basicExample: {
            markup: require('!!prismjs-loader?lang=markup!./basic-example.html') 
        },
        tableHeadOptions: {
            markup: require('!!prismjs-loader?lang=markup!./table-head-options.html') 
        },
        borderedTable: {
            markup: require('!!prismjs-loader?lang=markup!./bordered-table.html') 
        },
        strippedRows: {
            markup: require('!!prismjs-loader?lang=markup!./stripped-rows.html') 
        },
        hoverableRows: {
            markup: require('!!prismjs-loader?lang=markup!./hoverable-rows.html') 
        },
        smallTable: {
            markup: require('!!prismjs-loader?lang=markup!./small-table.html') 
        }
    };

    toggleInverse() {
        const tables:any = document.querySelectorAll('[component="Table"] .table');
        Array.from(tables).forEach((table:any) => {
            console.log('called : ', table);
            if (table.classList.contains('table-inverse')) {
                table.classList.remove('table-inverse');
            } else {
                table.classList.add('table-inverse');                
            }
        });
    }
}