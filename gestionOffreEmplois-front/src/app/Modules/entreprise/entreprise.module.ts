import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { CreationComponent } from './Pages/creation/creation.component';
import { MonEntrepriseComponent } from './Pages/mon-entreprise/mon-entreprise.component';
import { EntrepriseComponent } from './entreprise.component';
import { HeaderEntrepriseComponent } from './Components/header-entreprise/header-entreprise.component';



@NgModule({
  declarations: [
    AccueilComponent,
    CreationComponent,
    MonEntrepriseComponent,
    EntrepriseComponent,
    HeaderEntrepriseComponent
  ],
  imports: [
    CommonModule,
    EntrepriseRoutingModule
  ]
})
export class EntrepriseModule { }
