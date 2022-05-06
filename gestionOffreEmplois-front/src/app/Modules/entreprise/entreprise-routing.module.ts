import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EntrepriseComponent } from "./entreprise.component";
import { AccueilComponent } from "./Pages/accueil/accueil.component";
import { CreationComponent } from "./Pages/creation/creation.component";
import { MonEntrepriseComponent } from "./Pages/mon-entreprise/mon-entreprise.component";

const routes: Routes = [
    {
        path: '',
        component: EntrepriseComponent,
        children: [
            {
                path: 'accueil',
                component: AccueilComponent
            },
            {
                path: 'creation',
                component: CreationComponent
            },
            {
                path: 'monentreprise',
                component: MonEntrepriseComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntrepriseRoutingModule {

} 