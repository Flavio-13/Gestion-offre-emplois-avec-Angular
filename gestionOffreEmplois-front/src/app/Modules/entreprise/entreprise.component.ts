import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/models/Links';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  public links: Array<Links> = [
    {
      name: 'Accueil',
      path: '/entreprise/accueil'
    },
    {
      name: 'Creation',
      path: '/entreprise/creation'
    },
    {
      name: 'Mon entreprise',
      path: '/entreprise/monentreprise'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
