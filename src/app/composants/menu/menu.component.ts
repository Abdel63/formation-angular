import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/interfaces/stagiaire';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // title = 'formation-angular';
  // tab: number[] = [2, 5, 3, 8];
  // moyennes: number[] = [12, 5, 16, 18];
  // stagiaire: Stagiaire = {num: 100, nom: "wick", prenom: "john"}
  // stagiaires : Stagiaire[] = [
  //   { num: 100, nom: "wick", prenom: "john" },
  //   { num: 200, nom: "dalton", prenom: "jack" },
  //   { num: 300, nom: "doe", prenom: "joe" },
  //   { num: 400, nom: "maggio", prenom: "sophie" },
  // ]
  utilisateur: Utilisateur = {};
  isConnected = false;
  constructor(private us: UtilisateurService) { }

  ngOnInit(): void {
  }
  seConnecter() {
    this.us.checkUser(this.utilisateur).subscribe(res => {
      if (res.length > 0) {
        this.isConnected = true;
        const userString = JSON.stringify(res[0]);  // j'ai transformé l'objet en string
        this.utilisateur = res[0];
        localStorage.setItem('user', userString) // on ajoute un item dans la mémoire qu'on va appeler user
      
      }
    })
  }
  seDeconnecter() {
      this.isConnected = false;
      localStorage.removeItem('user'); // supprimer l'utilisateur quand il se déconnecte
  }
}
