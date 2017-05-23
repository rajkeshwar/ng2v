import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'ng2vd-buttons-radio-reactive',
  templateUrl: './buttons-radio-reactive.html'
})
export class Ng2vdButtonsRadioReactive implements OnInit {
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }
}
