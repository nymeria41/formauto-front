import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoitureService } from '../../service/voiture.service';
import { Voiture } from '../../modele/voiture.model';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-details-voiture',
  templateUrl: './details-voiture.component.html',
  styleUrls: ['./details-voiture.component.less'],
  standalone: true,
  imports: [FormsModule,CommonModule]

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
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.voitureService.getVoitureById(+id).subscribe({
          next: (voiture) => {
            this.voiture = voiture;
            this.voitureService.getImages(+id).subscribe({
              next: (images) => {
                if (this.voiture) {
                  this.voiture.images = images;
                } // ici
              },
              error: (err) => {
                console.error('Erreur lors du chargement des images', err);
              }
            });
          },
          error: (err) => {
            console.error('Erreur lors du chargement de la voiture', err);
          }
        });
      }
    });
  }
}
