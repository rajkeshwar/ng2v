import {Ng2vdButtonsCheckbox} from './checkbox/buttons-checkbox';
import {Ng2vdButtonsCheckboxReactive} from './checkbox-reactive/buttons-checkbox-reactive';
import {Ng2vdButtonsRadio} from './radio/buttons-radio';
import {Ng2vdButtonsRadioReactive} from './radio-reactive/buttons-radio-reactive';

export const DEMO_DIRECTIVES = [Ng2vdButtonsCheckbox, Ng2vdButtonsCheckboxReactive, Ng2vdButtonsRadio, Ng2vdButtonsRadioReactive];

export const DEMO_SNIPPETS = {
  checkbox: {
    code: require('!!prismjs-loader?lang=typescript!./checkbox/buttons-checkbox'),
    markup: require('!!prismjs-loader?lang=markup!./checkbox/buttons-checkbox.html')},
  checkboxReactive: {
    code: require('!!prismjs-loader?lang=typescript!./checkbox-reactive/buttons-checkbox-reactive'),
    markup: require('!!prismjs-loader?lang=markup!./checkbox-reactive/buttons-checkbox-reactive.html')},
  radio: {
    code: require('!!prismjs-loader?lang=typescript!./radio/buttons-radio'),
    markup: require('!!prismjs-loader?lang=markup!./radio/buttons-radio.html')},
  radioReactive: {
    code: require('!!prismjs-loader?lang=typescript!./radio-reactive/buttons-radio-reactive'),
    markup: require('!!prismjs-loader?lang=markup!./radio-reactive/buttons-radio-reactive.html')}
};
