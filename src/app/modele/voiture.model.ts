export class Voiture {
  id?: number;
  marque: string;
  modele: string;
  annee: number;
  prix: number;
  description: string;
  carburant: string;
  type: string;
  vitesse: number;
  cylindre: number;
  reservoir: number;
  boite: string;
  images?: string[];

  constructor() {
    this.marque = '';
    this.modele = '';
    this.annee = 0;
    this.prix = 0;
    this.description = '';
    this.carburant = '';
    this.type = '';
    this.vitesse = 0;
    this.cylindre = 0;
    this.reservoir = 0;
    this.boite = '';
    this.images = ['']
  }
}
