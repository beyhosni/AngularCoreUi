import { BienDetailsComponent } from './components/bien-details/bien-details.component';
import { NouveauBienComponent } from './components/nouveau-bien/nouveau-bien.component';
import { ListBiensComponent } from './components/list-biens/list-biens.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const biensRoutes: Routes = [
      {
        path: '',
        data: {
          title: 'Biens'
        },
        children : [
          {
            path: '',
            component: ListBiensComponent,
            data: {
              title: ''
            }
          },
           {
            path: 'nouveau-bien',
            component: NouveauBienComponent,
            data: {
              title: 'Nouveau bien'
            }
          },
          {
            path: 'bien-details',
            component: BienDetailsComponent,
            data: {
              title: 'Détails du bien'
            }
          }
        ]
      }
  ];

@NgModule ({
  imports : [
    RouterModule.forChild(biensRoutes)
  ],
  exports : [ RouterModule ],
  providers: []
 })

export class BiensRoutingModule { }
