import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "auth",
    loadChildren: () => import('./Modules/authentification/authentification.module')
    .then(m => m.AuthentificationModule)
  },
  {
    path: 'entreprise',
    loadChildren: () => import('./Modules/entreprise/entreprise.module')
    .then(m => m.EntrepriseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
