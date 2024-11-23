// add-voiture.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from '../../service/voiture.service';
import { Voiture } from '../../modele/voiture.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.less'],
  standalone: true,
  imports: [FormsModule],

})
export class AddVoitureComponent {

  voiture: Voiture = {
    marque: '',
    modele: '',
    annee: 0,
    prix: 0,
    description : '',
    carburant : '',
    type : '',
    vitesse : 0,
    cylindre : 0,
    reservoir : 0,
    boite : '',
    images : ['']
  };
  selectedFile: File | null = null;

  constructor(private voitureService: VoitureService, private router: Router) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  addVoiture() {
    const formData = new FormData();
    Object.keys(this.voiture).forEach((key) => {
      const value = this.voiture[key as keyof Voiture];
      if (Array.isArray(value)) {
        // Si c'est un tableau, ajoutez chaque élément
        value.forEach((item) => formData.append(key, item.toString()));
      } else if (value !== null && value !== undefined) {
        // Ajoutez le champ si la valeur existe
        formData.append(key, value.toString());
      }
    });
    if (this.selectedFile) {
      formData.append('images', this.selectedFile); // Ajoutez le fichier sélectionné
    }
    this.voitureService.addVoitureWithImage(formData).subscribe({
      next: () => {
        alert('Voiture ajoutée avec succès!');
        this.router.navigate(['/voitures']); // Redirige vers la liste des voitures
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la voiture:', err);
        alert('Une erreur est survenue lors de l\'ajout de la voiture.');
      },
    });
  }



}
