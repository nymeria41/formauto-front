import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../service/voiture.service';
import { Voiture } from '../modele/voiture.model';

@Component({
  selector: 'app-modify-voiture',
  templateUrl: './modify-voiture.component.html',
  styleUrls: ['./modify-voiture.component.less']
})
export class ModifyVoitureComponent implements OnInit {
  voiture: Voiture | null = null;  // Voiture à modifier
  errorMessage: string | null = null;  // Message d'erreur
  id: number | null = null;  // ID de la voiture à modifier

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private voitureService: VoitureService
  ) {}

  ngOnInit(): void {
    this.getVoitureDetails(); // Récupérer les détails de la voiture lors de l'initialisation
  }

  // Méthode pour récupérer les détails d'une voiture par ID
  getVoitureDetails(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!; // Récupérer l'ID depuis les paramètres de l'URL
    this.voitureService.getVoitureById(this.id).subscribe(
      (response) => {
        this.voiture = response;  // Stocker la voiture récupérée
      },
      (error) => {
        this.errorMessage = 'Voiture introuvable. Veuillez vérifier l\'ID de la voiture.'; // Gérer les erreurs
        console.error('Erreur lors de la récupération des détails de la voiture:', error);
      }
    );
  }

  // Méthode pour mettre à jour les détails de la voiture
  updateVoiture(): void {
    if (this.voiture && this.id !== null) {
      this.voitureService.updateVoiture(this.id, this.voiture).subscribe(
        () => {
          alert('Voiture mise à jour avec succès !');
          this.router.navigate(['/voitures']); // Rediriger vers la liste des voitures
        },
        (error) => {
          this.errorMessage = 'Erreur lors de la mise à jour de la voiture.';
          console.error('Erreur lors de la mise à jour de la voiture:', error);
        }
      );
    }
  }
}
