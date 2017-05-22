import { Component } from '@angular/core';

@Component({
  selector: 'ng2vd-multiselect-basic',
  templateUrl: './multiselect-basic.html',
})
export class Ng2vdMultiselectBasic {

    public options:any;
    public selectedValues:Array<any>=[];

    constructor() {
        this.options = [
            {key: 'Mumbai', value: 'Mumbai'},
            {key: 'Delhi', value: 'Delhi'},
            {key: 'Bangalore', value: 'Bangalore'},
            {key: 'Hyderabad', value: 'Hyderabad'},
            {key: 'Ahmedabad', value: 'Ahmedabad'},
            {key: 'Chennai', value: 'Chennai'},
            {key: 'Kolkata', value: 'Kolkata'},
            {key: 'Surat', value: 'Surat'},
            {key: 'Pune', value: 'Pune'},
            {key: 'Jaipur', value: 'Jaipur'},
            {key: 'Lucknow', value: 'Lucknow'}
        ]
    }

    dropdownOpen() {
        console.log('dropdownOpen called');
    }

    dropdownClosed() {
        console.log('dropdownClosed called');
    }

    searchValueChange( values ) {
        console.log('searchValueChange called : ', values);
    }

    clearFilter() {
        console.log('clearFilter called');
    }
}
