export class Voiture {
  id?: number;
  marque: string;
  modele: string;
  annee: number;
  prix: number;

  constructor() {
    this.marque = '';
    this.modele = '';
    this.annee = 0;
    this.prix = 0;
  }
}
