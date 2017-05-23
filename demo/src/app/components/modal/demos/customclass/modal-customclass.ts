import {Component, ViewEncapsulation} from '@angular/core';

import {Ng2vModal, ModalDismissReasons} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-modal-customclass',
  templateUrl: './modal-customclass.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})
export class Ng2vdModalCustomclass {
  closeResult: string;

  constructor(private modalService: Ng2vModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}
