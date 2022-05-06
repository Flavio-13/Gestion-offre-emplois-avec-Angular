import { Action } from "@ngrx/store";
import { User } from "../models/User";

export enum UserActionsTypes {
    LOGIN = '[Authentification] login user',
    INSCRIPTION = '[Authentification] inscription user'
};


/**
 * Action: authentifier un utilisateur
 */
export class GetUserLoginAction implements Action {

    public type: UserActionsTypes.LOGIN = UserActionsTypes.LOGIN;

    constructor(public payload: User) {

    }
}


export class GetUserInscriptionAction implements Action {

    public type: UserActionsTypes.INSCRIPTION = UserActionsTypes.INSCRIPTION;

    constructor(public payload: User) {}
}


export type UserActions = GetUserLoginAction | GetUserInscriptionAction;