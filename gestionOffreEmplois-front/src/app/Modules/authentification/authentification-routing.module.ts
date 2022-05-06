import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthentificationComponent } from "./authentification.component";
import { InscriptionEntrepriseComponent } from "./Pages/inscription-entreprise/inscription-entreprise.component";
import { InscriptionHomeComponent } from "./Pages/inscription-home/inscription-home.component";
import { InscriptionUserComponent } from "./Pages/inscription-user/inscription-user.component";
import { InscriptionComponent } from "./Pages/inscription/inscription.component";
import { LoginEntrepriseComponent } from "./Pages/login-entreprise/login-entreprise.component";
import { LoginUserComponent } from "./Pages/login-user/login-user.component";
import { LoginComponent } from "./Pages/login/login.component";

const routes: Routes = [
    {
        path: '',
        component: AuthentificationComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                children: [
                    {
                        path: '',
                        component: LoginUserComponent
                    },
                    {
                        path: 'loginsociete',
                        component: LoginEntrepriseComponent
                    }
                ]
            },
            {
                path: "inscription",
                component: InscriptionComponent,
                children: [
                    {
                        path: '',
                        component: InscriptionHomeComponent
                    },
                    {
                        path: 'inscription-user',
                        component: InscriptionUserComponent
                    },
                    {
                        path: 'inscription-entreprise',
                        component: InscriptionEntrepriseComponent
                    }
                ]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthentificationRoutingModule { }