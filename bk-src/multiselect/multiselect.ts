/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */

import {
  NgModule,
  Component,
  Pipe,
  OnInit,
  DoCheck,
  HostListener,
  Input,
  ElementRef,
  Output,
  EventEmitter,
  forwardRef,
  IterableDiffers,
  PipeTransform,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor, Validator, AbstractControl } from '@angular/forms';
import { ViewChild } from '@angular/core';

const MULTISELECT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Ng2vMultiselect),
  multi: true
};

export interface IMultiSelectOption {
  key: string;
  value: string;
  isChecked: boolean;
  isLabel?: boolean;
  parentId?: any;
  params?: any;
}

export interface IMultiSelectSettings {
  pullRight?: boolean;
  enableSearch?: boolean;
  checkedStyle?: 'checkboxes' | 'glyphicon' | 'fontawesome';
  buttonClasses?: string;
  itemClasses?: string;
  selectionLimit?: number;
  closeOnSelect?: boolean;
  autoUnselect?: boolean;
  showCheckAll?: boolean;
  showUncheckAll?: boolean;
  dynamicTitleMaxItems?: number;
  maxHeight?: string;
  displayAllSelectedText?: boolean;
}

export interface IMultiSelectTexts {
  checkAll?: string;
  uncheckAll?: string;
  checked?: string;
  checkedPlural?: string;
  searchPlaceholder?: string;
  defaultTitle?: string;
  allSelected?: string;
}

@Pipe({ name: 'searchFilter'})
export class MultiSelectSearchFilter implements PipeTransform {
  transform(options: Array<IMultiSelectOption> = [], args: string): Array<IMultiSelectOption> {
    const matchPredicate = (option: IMultiSelectOption) => option.value.toLowerCase().indexOf((args || '').toLowerCase()) > -1;
    return options.filter((option: IMultiSelectOption) => {
      return matchPredicate(option);
    });
  }
}

@Component({
  selector: 'ng2v-multiselect',
  providers: [MULTISELECT_VALUE_ACCESSOR],
  templateUrl: './multiselect.html',
  encapsulation: ViewEncapsulation.None
})
export class Ng2vMultiselect implements OnInit, DoCheck, ControlValueAccessor, Validator {
  @Input() options: Array<IMultiSelectOption> = [];
  @Input() settings: IMultiSelectSettings;
  @Input() texts: IMultiSelectTexts;
  @Input() disabled: boolean = false;
  @Input() loading:boolean = false;
  @Output() selectionLimitReached = new EventEmitter();
  @Output() dropdownClosed = new EventEmitter();
  @Output() dropdownOpen = new EventEmitter();
  @Output() onAdded = new EventEmitter();
  @Output() onRemoved = new EventEmitter();
  @Output() searchValueChange = new EventEmitter();
  @Output() clearFilter = new EventEmitter();

  @HostListener('document: click', ['$event.target'])
  onClick(target: HTMLElement) {
    if(this.isVisible && !this.element.nativeElement.contains(target)) {
      this.isVisible = false;
      this.dropdownClosed.emit();
    } else if(this.element.nativeElement.querySelector('button').contains(target)) {
      this.dropdownOpen.emit();
    }
  }

  model: Array<IMultiSelectOption>;
  title: string;
  differ: any;
  numSelected: number = 0;
  isVisible: boolean = false;
  searchFilterText: string = '';
  isCheckedAll:boolean = false;
  fewChecked:boolean = false;
  maxZIndex:number = 0;

  defaultSettings: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-default btn-secondary',
    selectionLimit: 0,
    closeOnSelect: false,
    autoUnselect: false,
    showCheckAll: true,
    showUncheckAll: true,
    dynamicTitleMaxItems: 1,
    maxHeight: '300px'
  };
  defaultTexts: IMultiSelectTexts = {
    checkAll: 'Check all',
    uncheckAll: 'Uncheck all',
    checked: 'checked',
    checkedPlural: 'checked',
    searchPlaceholder: 'Search...',
    defaultTitle: 'Select',
    allSelected: 'All selected',
  };

  constructor(
      private element: ElementRef,
      private differs: IterableDiffers,
      private cd:ChangeDetectorRef,
      private zone:NgZone) {
    this.differ = differs.find([]).create(null); 
  }

  getItemStyle(option: IMultiSelectOption): any {
    if ( !option.isLabel ) {
      return {'cursor': 'pointer'};
    }
  }

  toggleCheckAll() {
    this.isCheckedAll = !this.isCheckedAll;
    this.fewChecked = false;
    if( this.isCheckedAll ) {
      this.checkAll();
    } else {
      this.uncheckAll();
    }
  }

  ngOnInit() {
    this.settings = Object.assign(this.defaultSettings, this.settings);
    this.texts = Object.assign(this.defaultTexts, this.texts);
    this.title = this.texts.defaultTitle || '';

    this.options = this.options || [];
  }

  onModelChange: Function = (_: any) => {};
  onModelTouched: Function = () => {};

  writeValue(value: any): void {
    if ( value ) {
      this.model = value;
      this.updateNumSelected();
      this.updateTitle();
      this.setCircleStatus();
    }
  }

  searchChange( value ) {
    if( (value && value.length >= 3) || value === "") {
      this.searchValueChange.next(value);
    }
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  ngDoCheck() { 
    const modelChanges = this.differ.diff(this.model);
    const optionsChanges = this.differ.diff(this.options);
    if (modelChanges || optionsChanges) {
      this.updateNumSelected();
      this.updateTitle();
      this.setCircleStatus();
    }
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    return (this.model && this.model.length) ? null : {
      required: {
        valid: false,
      },
    };
  }

  registerOnValidatorChange(fn: () => void): void { 
    throw new Error('Method not implemented.');
  }

  clearSearch(event: Event) {
    event.stopPropagation();
    this.searchFilterText = '';
    this.clearFilter.emit();
  }

  toggleDropdown() {
    this.isVisible = !this.isVisible;
    if (!this.isVisible) {
      this.dropdownClosed.emit();
      this.maxZIndex = 0;
    } else {
      this.maxZIndex = this.findMaxZIndex();
    }
  }

  isSelected(option: IMultiSelectOption): boolean {
    return this.model && this.model.filter( item => {
      return item.key === option.key;
    }).length > 0;
  }

  setSelected(option: IMultiSelectOption) {
    if ( !this.model ) {
      this.model = [];
    }

    //const index = this.model.indexOf(option);
    let index = -1;
    this.model.forEach( (item, idx) => {
      if( item.key === option.key ) {
        index = idx;
        return;
      }
    });

    if ( index > -1 ) {
      this.model.splice(index, 1);
      this.onRemoved.emit(option);
    } else {
      this.model.push(option);
      this.onAdded.emit(option);
    }

    if (this.settings.closeOnSelect) {
      this.toggleDropdown();
    }
    this.onModelChange(this.model);
    this.onModelTouched();
    this.setCircleStatus();
    this.updateNumSelected();
  }

  setCircleStatus() {
    if( !this.model ) return;
    if(this.model.length === 0) {
      this.fewChecked = false;
      this.isCheckedAll = false;
    } else if(this.options.length > this.model.length) {
      this.fewChecked = true;
      this.isCheckedAll = false;
    } else if(this.options.length === this.model.length) {
      this.isCheckedAll = true;
      this.fewChecked = false;
    }
  }

  updateNumSelected() {
    this.numSelected = this.model && this.model.length || 0;
  }

  updateTitle() {
    if(this.model && this.model.length > 0) {
      this.title = this.model[0].value;
    } else {
      this.title = this.texts.defaultTitle;
    }
  }

  checkAll() {
    this.model = this.options
      .map((option: IMultiSelectOption) => {  
        this.model = this.model || [];
        if (this.model.indexOf(option) === -1) {
          this.onAdded.emit(option);
        }
        return option;
      });
    this.onModelChange(this.model);
    this.updateNumSelected();
    this.updateTitle();
    this.onModelTouched();
  }

  findMaxZIndex() {

    let maxZIndex = 0;
    let elements = document.querySelectorAll('body *');

    // later, potentially repeatedly
    maxZIndex = Math.max(maxZIndex,...[
      ...Array.from(elements)
    ].map(a=>parseFloat(getComputedStyle(a).zIndex))
      .filter(a=>!isNaN(a)));
    
    return maxZIndex;
  }

  uncheckAll() {
    this.model.forEach((option: IMultiSelectOption) => this.onRemoved.emit(option));
    this.model = [];
    this.onModelChange(this.model);
    this.updateNumSelected();
    this.updateTitle();
    this.onModelTouched();
  }

  preventCheckboxCheck(event: Event, option: IMultiSelectOption) {
    if (this.settings.selectionLimit &&
      this.model.length >= this.settings.selectionLimit &&
      this.model.indexOf(option) === -1
    ) {
      event.preventDefault();
    }
  }
}

// @NgModule({
//   imports: [CommonModule, FormsModule],
//   exports: [Ng2vMultiselect, MultiSelectSearchFilter],
//   declarations: [Ng2vMultiselect, MultiSelectSearchFilter],
// })
// export class MultiselectDropdownModule {
// }