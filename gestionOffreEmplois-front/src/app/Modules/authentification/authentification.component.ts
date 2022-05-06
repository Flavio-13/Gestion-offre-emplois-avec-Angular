import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/models/Links';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  public links: Array<Links> = [
    {
      name: 'Accueil',
      path: '/'
    },
    {
      name: 'Connexion',
      path: '/auth/login'
    },
    {
      name: 'Inscription',
      path: '/auth/inscription'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
