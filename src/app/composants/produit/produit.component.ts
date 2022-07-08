import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];
  produit: Produit = {};
  constructor(private ps: ProduitService) { }

  ngOnInit(): void {
    // this.ps.getAllProducts().subscribe(res => {
    //   this.produits = res;
    // })
    this.initProduit();
  }
  
  ajouterProduit() {
    this.ps.addProduct(this.produit).subscribe(res => {
      this.initProduit();
    })
    this.produit = {};
  }
  initProduit() {
    this.ps.getAllProducts().subscribe(res => {
      this.produits = res;
    });
  }
  supprimerProduit(id = 0) {
    this.ps.deletProduct(id).subscribe(res => {
      this.initProduit();
    })
  }
  



  afficherTout(): void {
    // console.log(this.produit)
    // this.produits.push(this.produit)
    this.produits.push({ ...this.produit }); // Spread operator (ici on demande à afficher non pas l'objet en lui même mais sa ref)
    this.produit = {}; // ici on vide le formulaire avant d'afficher un nouvel objet
  }

}
