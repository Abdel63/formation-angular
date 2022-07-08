import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root' // ici ça dit que tu peux utiliser ce service quelque soit le module
})
export class ProduitService {
  private url: string = "http://localhost:5555/produits";
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Produit[]>(this.url);
  }
  getOneProduct(id: number) {
    return this.http.get<Produit>(this.url + "/" + id);
  }
  addProduct(p: Produit) {
    return this.http.post<Produit>(this.url, p);
  }
  deletProduct(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  updateProduct(p: Produit) {
    return this.http.put<Produit>(this.url + "/" + p.id, p);
  }
}