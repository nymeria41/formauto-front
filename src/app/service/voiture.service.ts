import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voiture } from '../modele/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private apiUrl = 'http://localhost:8080/api/voitures';  // URL de l'API Spring Boot

  constructor(private http: HttpClient) { }

  // Obtenir toutes les voitures
  getVoitures(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(this.apiUrl);
  }

  // Obtenir une voiture par ID
  getVoitureById(id: number): Observable<Voiture> {
    return this.http.get<Voiture>(`${this.apiUrl}/${id}`);
  }

  // Ajouter une voiture
  addVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>(this.apiUrl, voiture);
  }

  // Mettre à jour une voiture
  updateVoiture(id: number, voiture: Voiture): Observable<Voiture> {
    return this.http.put<Voiture>(`${this.apiUrl}/${id}`, voiture);
  }

  // Supprimer une voiture
  deleteVoiture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
