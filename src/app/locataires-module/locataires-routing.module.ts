import { LocataireDetailsComponent } from './components/locataire-details/locataire-details.component';
import { NouveauLocataireComponent } from './components/nouveau-locataire/nouveau-locataire.component';
import { ListLocatairesComponent } from './components/list-locataires/list-locataires.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const locRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Locataires'
    },
    children : [
      {
        path: '',
        component: ListLocatairesComponent,
        data: {
          title: ''
        }
      },
       {
        path: 'nouveau-locataire',
        component: NouveauLocataireComponent,
        data: {
          title: 'Nouveau locataire'
        }
      },
      {
        path: 'locataire-details',
        component: LocataireDetailsComponent,
        data: {
          title: 'Détails du locataire'
        }
      }
    ]
  }
];

@NgModule ({
  imports : [
    RouterModule.forChild(locRoutes)
  ],
  exports : [ RouterModule ],
  providers: []
 })

export class LocatairesRoutingModule { }
