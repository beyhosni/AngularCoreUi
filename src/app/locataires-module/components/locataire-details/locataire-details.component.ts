import { Component, TemplateRef, OnInit} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-locataire-details',
  templateUrl: './locataire-details.component.html',
  styleUrls: ['./locataire-details.component.scss']
})
export class LocataireDetailsComponent implements OnInit {

  modalRef: BsModalRef;
  showDeleteAlert: Boolean = false;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit() {
  }

  onDeleteLoc() {
    this.showDeleteAlert = true;
  }

  onUpdateLoc() {

  }

}
