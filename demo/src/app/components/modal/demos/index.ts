import {Ng2vdModalBasic} from './basic/modal-basic';
import {Ng2vdModalComponent, Ng2vdModalContent} from './component/modal-component';
import {Ng2vdModalCustomclass} from './customclass/modal-customclass';

export const DEMO_DIRECTIVES = [Ng2vdModalBasic, Ng2vdModalComponent, Ng2vdModalCustomclass];
export {Ng2vdModalContent} from './component/modal-component';

export const DEMO_SNIPPETS = {
  'basic': {
    'code': require('!!prismjs-loader?lang=typescript!./basic/modal-basic'),
    'markup': require('!!prismjs-loader?lang=markup!./basic/modal-basic.html')},
  'component': {
    'code': require('!!prismjs-loader?lang=typescript!./component/modal-component'),
    'markup': require('!!prismjs-loader?lang=markup!./component/modal-component.html')},
  'customclass': {
    'code': require('!!prismjs-loader?lang=typescript!./customclass/modal-customclass'),
    'markup': require('!!prismjs-loader?lang=markup!./customclass/modal-customclass.html')}
};
