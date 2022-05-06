import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserLogin } from 'src/app/models/UserLogin';
import { AuthentificationService } from '../../../../services/authentification.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit, OnDestroy {

  /**
   * Pour stocker l'email et le mot de passe entré sur le formulaire
   */
  public userLogin: UserLogin = {
    emailUser: '',
    mdpUser: ''
  }


  /**
   * Après vérification du back-end et que c'est un succès, les données de l'utilisateur seront stocké
   * dans cet attribut
   */
  public static userFromBackEnd: User = {
    idUser: 0,
    nomUser: '',
    prenomUser: '',
    emailUser: '',
    telUser: '',
    mdpUser: ''
  }


  
  /**
   * Handle the form login
   */
  public loginFormGroup: FormGroup = new FormGroup({
    emailUser: new FormControl(''),
    mdpUser: new FormControl('')
  });

  public showAlert: boolean = false;

  public subscriptionLogin!: Subscription;


  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    
  }


  /**
   * This method verify if the user have an account
   */
  public getLoginUser(): void {
    this.userLogin = this.loginFormGroup.value;

    this.subscriptionLogin = this.authService.getUserLogin(this.userLogin)
    .subscribe({
      next: user => {
        if (user) {
          this.showAlert = false;
          LoginUserComponent.userFromBackEnd = user;
          this.router.navigateByUrl('/entreprise/accueil');
        } else this.showAlert = true;
        
      },
      error: err => console.log(err)
    });
  }

}
