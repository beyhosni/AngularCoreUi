import { NouveauUserComponent } from './components/nouveau-user/nouveau-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const userRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Utilisateurs'
    },
    children : [
      {
        path: '',
        component: ListUserComponent,
        data: {
          title: ''
        }
      },
       {
        path: 'nouveau-utilisateur',
        component: NouveauUserComponent,
        data: {
          title: 'Nouveau utilisateurs'
        }
      }
  ]
  }
];


@NgModule ({
  imports : [
    RouterModule.forChild(userRoutes)
  ],
  exports : [ RouterModule ],
  providers: []
 })

export class UserRoutingModule { }
