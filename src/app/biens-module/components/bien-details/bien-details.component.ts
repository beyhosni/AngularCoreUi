import { Component, TemplateRef, OnInit} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bien-details',
  templateUrl: './bien-details.component.html',
  styleUrls: ['./bien-details.component.scss']
})
export class BienDetailsComponent implements OnInit {
  modalRef: BsModalRef;
  showDeleteAlert: Boolean = false;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  onDeleteBien() {
    this.showDeleteAlert = true;
  }

  onUpdateBien() {

  }


}
