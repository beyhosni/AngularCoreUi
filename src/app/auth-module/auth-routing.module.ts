import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const authRoutes: Routes = [

];

@NgModule ({
  imports : [
    RouterModule.forChild(authRoutes)
  ],
  exports : [ RouterModule ],
  providers: []
 })


export class AuthRoutingModule { }
