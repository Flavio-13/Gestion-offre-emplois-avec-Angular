import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { mergeMap, Observable } from "rxjs";
import { AuthentificationService } from "../services/authentification.service";
import { UserActionsTypes } from "./user.actions";

@Injectable()
export class userEffects {

    constructor(private authService: AuthentificationService, private effectActions: Actions) {

    }

    public getCurrentUser: Observable<Action> = createEffect(
        () => this.effectActions.pipe( 
            
        )
    )
}