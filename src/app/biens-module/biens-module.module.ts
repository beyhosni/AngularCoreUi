import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiensRoutingModule } from './biens-routing.module';
import { ListBiensComponent } from './components/list-biens/list-biens.component';
import { NouveauBienComponent } from './components/nouveau-bien/nouveau-bien.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BienDetailsComponent } from './components/bien-details/bien-details.component';

@NgModule({
  declarations: [ListBiensComponent, NouveauBienComponent, BienDetailsComponent],
  imports: [
    CommonModule,
    BiensRoutingModule,
    TabsModule,
    ModalModule.forRoot()
  ],
  exports: []
})
export class BiensModuleModule { }
