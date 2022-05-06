import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/models/Links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
