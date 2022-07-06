import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/interfaces/stagiaire';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'formation-angular';
  tab: number[] = [2, 5, 3, 8];
  moyennes: number[] = [12, 5, 16, 18];
  stagiaire: Stagiaire = {num: 100, nom: "wick", prenom: "john"}
  stagiaires : Stagiaire[] = [
    { num: 100, nom: "wick", prenom: "john" },
    { num: 200, nom: "dalton", prenom: "jack" },
    { num: 300, nom: "doe", prenom: "joe" },
    { num: 400, nom: "maggio", prenom: "sophie" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
