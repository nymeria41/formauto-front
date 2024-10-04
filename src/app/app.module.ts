import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes'; // Importer le module de routage

import { AppComponent } from './app.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { ModifyVoitureComponent } from './modify-voiture/modify-voiture.component';
import { DetailsVoitureComponent } from './details-voiture/details-voiture.component';
import { VoitureService } from './service/voiture.service';

@NgModule({
  declarations: [
    AppComponent,
    AddVoitureComponent,
    VoitureListComponent,
    ModifyVoitureComponent,
    DetailsVoitureComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Intégration du routage
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
