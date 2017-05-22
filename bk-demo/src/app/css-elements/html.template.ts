
import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Http } from '@angular/http';

@Directive({ selector:'[htmlTemplate]'})
export class HtmlTemplateDirective implements OnChanges {

    @Input('htmlTemplate') templateUrl:string;

    constructor(private el: ElementRef) {}

    ngOnChanges() {
        console.log('htmlTemplate : ', this.templateUrl);
        this.el.nativeElement.innerHTML = require(`${this.templateUrl}`);
    }
}