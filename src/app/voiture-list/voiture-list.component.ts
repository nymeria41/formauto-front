import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VoitureService } from '../service/voiture.service';
import { Voiture } from '../modele/voiture.model';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-voiture-list',
  standalone: true,
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.less'],
  imports: [CommonModule,HttpClientModule]
})
export class VoitureListComponent implements OnInit {
  voitures: Voiture[] = [];  // Tableau pour stocker les voitures
  errorMessage: string | null = null;  // Message d'erreur

  constructor(private voitureService: VoitureService, private router: Router) {}

  ngOnInit(): void {
    this.getVoitures(); // Récupérer la liste des voitures lors de l'initialisation
  }

  // Méthode pour récupérer la liste des voitures
  getVoitures(): void {
    this.voitureService.getVoitures().subscribe(
      (response) => {
        this.voitures = response; // Stocker les voitures récupérées
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la récupération des voitures.';
        console.error('Erreur lors de la récupération des voitures:', error);
      }
    );
  }

  // Méthode pour naviguer vers le composant de modification d'une voiture
  modifyVoiture(id: number): void {
    this.router.navigate(['/modify-voiture', id]); // Naviguer vers le composant de modification avec l'ID
  }

  // Méthode pour supprimer une voiture
  deleteVoiture(id: number): void {
    if (id !== undefined) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?')) {
        this.voitureService.deleteVoiture(id).subscribe(
          () => {
            this.getVoitures(); // Récupérer à nouveau la liste après la suppression
            alert('Voiture supprimée avec succès !');
          },
          (error) => {
            this.errorMessage = 'Erreur lors de la suppression de la voiture.';
            console.error('Erreur lors de la suppression de la voiture:', error);
          }
        );
      }
    }
    else {
      console.error('L\'ID de la voiture est indéfini.');
    }
  }
}
