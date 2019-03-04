import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocatairesRoutingModule } from './locataires-routing.module';
import { ListLocatairesComponent } from './components/list-locataires/list-locataires.component';
import { NouveauLocataireComponent } from './components/nouveau-locataire/nouveau-locataire.component';
import { LocataireDetailsComponent } from './components/locataire-details/locataire-details.component';

@NgModule({
  declarations: [ListLocatairesComponent, NouveauLocataireComponent, LocataireDetailsComponent],
  imports: [
    CommonModule,
    LocatairesRoutingModule,
    TabsModule,
    ModalModule.forRoot()
  ]
})
export class LocatairesModuleModule { }
