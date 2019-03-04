import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-biens',
  templateUrl: './list-biens.component.html',
  styleUrls: ['./list-biens.component.scss']
})
export class ListBiensComponent implements OnInit {

  biens: any = [
    { nature : 'Entrepot', ref : '0023', adresse : '25 rue Mathurins	',
    locataire : 'Jean Dupont', loyer : '500 €', superficie : '25 m²', status : 'Libre'},

    { nature : 'Bureau', ref : '0024', adresse : '25 rue Mathurins	',
    locataire : 'Francois Noel', loyer : '800 €', superficie : '40 m²', status : 'prochainement libre'},

    { nature : 'Studio', ref : '0025', adresse : '25 rue Mathurins	',
    locataire : 'Amelie Dupont', loyer : '600 €', superficie : '60 m²', status : 'occupé'},

    { nature : 'Studio', ref : '0025', adresse : '25 rue Mathurins	',
    locataire : 'Hosni Dupont', loyer : '1200 €', superficie : '90 m²', status : 'occupé'}
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goDetails() {
    this.router.navigateByUrl('biens/bien-details');
  }

  onNewBien() {
    this.router.navigateByUrl('biens/nouveau-bien');
  }

  onDownloadCSV() {

  }

}
