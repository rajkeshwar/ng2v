import {Component} from '@angular/core';

import {Ng2vModal, ModalDismissReasons} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class Ng2vdModalBasic {
  closeResult: string;

  constructor(private modalService: Ng2vModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
