import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationComponent } from './authentification.component';
import { LoginComponent } from './Pages/login/login.component';
import { InscriptionComponent } from './Pages/inscription/inscription.component';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginUserComponent } from './Pages/login-user/login-user.component';
import { LoginEntrepriseComponent } from './Pages/login-entreprise/login-entreprise.component';
import { HeaderAuthComponent } from './Components/header-auth/header-auth.component';
import { InscriptionUserComponent } from './Pages/inscription-user/inscription-user.component';
import { InscriptionEntrepriseComponent } from './Pages/inscription-entreprise/inscription-entreprise.component';
import { InscriptionHomeComponent } from './Pages/inscription-home/inscription-home.component';


@NgModule({
  declarations: [
    AuthentificationComponent,
    LoginComponent,
    InscriptionComponent,
    LoginUserComponent,
    LoginEntrepriseComponent,
    HeaderAuthComponent,
    InscriptionUserComponent,
    InscriptionEntrepriseComponent,
    InscriptionHomeComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthentificationModule { }
