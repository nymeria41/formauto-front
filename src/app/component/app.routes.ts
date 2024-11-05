//app.route.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { ModifyVoitureComponent } from './modify-voiture/modify-voiture.component';
import { DetailsVoitureComponent } from './details-voiture/details-voiture.component';

export const routes: Routes = [
  { path: 'voitures', component: VoitureListComponent },
  { path: 'add', component: AddVoitureComponent },
  { path: 'edit/:id', component: ModifyVoitureComponent },
  { path: 'voiture/:id', component: DetailsVoitureComponent },
  { path: '', redirectTo: '/voitures', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
