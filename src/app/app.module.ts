import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { ModifyVoitureComponent } from './modify-voiture/modify-voiture.component';
import { DetailsVoitureComponent } from './details-voiture/details-voiture.component';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    DetailsVoitureComponent,
    AddVoitureComponent,
    VoitureListComponent,
    ModifyVoitureComponent,
    AppComponent
  ],
  providers: [ provideHttpClient()],
  bootstrap: []
})
export class AppModule { }
