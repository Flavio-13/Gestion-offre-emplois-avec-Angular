import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserLogin } from 'src/app/models/UserLogin';
import { LoginUserComponent } from 'src/app/Modules/authentification/Pages/login-user/login-user.component';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public user: User = this.authService.getInstanceLogin(LoginUserComponent.userFromBackEnd);

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void {

  }

}
