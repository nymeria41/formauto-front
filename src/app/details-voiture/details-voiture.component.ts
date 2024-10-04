import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoitureService } from '../service/voiture.service';
import { Voiture } from '../modele/voiture.model';

@Component({
  selector: 'app-details-voiture',
  templateUrl: './details-voiture.component.html',
  styleUrls: ['./details-voiture.component.less']
})
export class DetailsVoitureComponent implements OnInit {
  voiture: Voiture | null = null;  // Voiture à afficher
  errorMessage: string | null = null;  // Message d'erreur

  constructor(private route: ActivatedRoute, private voitureService: VoitureService) {}

  ngOnInit(): void {
    this.getVoitureDetails(); // Récupérer les détails de la voiture lors de l'initialisation
  }

  // Méthode pour récupérer les détails d'une voiture par ID
  getVoitureDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Récupérer l'ID depuis les paramètres de l'URL
    this.voitureService.getVoitureById(id).subscribe(
      (response) => {
        this.voiture = response;  // Stocker la voiture récupérée
      },
      (error) => {
        this.errorMessage = 'Voiture introuvable. Veuillez vérifier l\'ID de la voiture.'; // Gérer les erreurs
        console.error('Erreur lors de la récupération des détails de la voiture:', error);
      }
    );
  }
}
