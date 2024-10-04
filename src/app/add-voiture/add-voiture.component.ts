// add-voiture.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from '../service/voiture.service';
import { Voiture } from '../modele/voiture.model'; // Assurez-vous que le DTO est bien défini

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.less'] // Si vous utilisez LESS pour le style
})
export class AddVoitureComponent {
  voiture: Voiture = {
    marque: '',
    modele: '',
    annee: 0,
    prix: 0
  };

  constructor(private voitureService: VoitureService, private router: Router) {}

  addVoiture() {
    this.voitureService.addVoiture(this.voiture).subscribe({
      next: () => {
        alert('Voiture ajoutée avec succès!');
        this.router.navigate(['/voitures']); // Redirige vers la liste des voitures
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la voiture:', err);
        alert('Une erreur est survenue lors de l\'ajout de la voiture.');
      }
    });
  }
}
