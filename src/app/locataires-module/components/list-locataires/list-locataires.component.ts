import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-locataires',
  templateUrl: './list-locataires.component.html',
  styleUrls: ['./list-locataires.component.scss']
})
export class ListLocatairesComponent implements OnInit {

  locataires: any = [
    { nom : 'Ghraibi', prenom : 'Slim', adresse : '25 rue Mathurins',
    email : 'slim@gmail.com', telephone : '07958574'},

    { nom : 'Bey', prenom : 'Hosni', adresse : '25 rue Mathurins',
    email : 'hosni@gmail.com', telephone : '07958574'},

    { nom : 'Wajaa', prenom : 'Atef', adresse : '25 rue Mathurins',
    email : 'atef@gmail.com', telephone : '07958574'},

    { nom : 'Ons', prenom : 'choaib', adresse : '25 rue Mathurins',
    email : 'ons@gmail.com', telephone : '07958574'}
  ];


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goDetails() {
    this.router.navigateByUrl('locataires/locataire-details');
  }

  onNewLocataire() {
    this.router.navigateByUrl('locataires/nouveau-locataire');
  }

}
