import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];
  produit: Produit = {};
  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  afficherTout(): void {
    // console.log(this.produit)
    // this.produits.push(this.produit)
    this.produits.push({ ...this.produit }); // Spread operator (ici on demande à afficher non pas l'objet en lui même mais sa ref)
    this.produit = {}; // ici on vide le formulaire avant d'afficher un nouvel objet
  }

}
