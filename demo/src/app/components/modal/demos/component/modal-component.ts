import {Component, Input} from '@angular/core';

import {Ng2vModal, Ng2vActiveModal} from '@ng2v/ng2v-components';

@Component({
  selector: 'ng2vd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class Ng2vdModalContent {
  @Input() name;

  constructor(public activeModal: Ng2vActiveModal) {}
}

@Component({
  selector: 'ng2vd-modal-component',
  templateUrl: './modal-component.html'
})
export class Ng2vdModalComponent {
  constructor(private modalService: Ng2vModal) {}

  open() {
    const modalRef = this.modalService.open(Ng2vdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
