import { User } from "../models/User";
import { UserActions, UserActionsTypes } from "./user.actions";


export interface UserState {
    user: User;
}

/**
 * Le state initial
 */
const userInitState: UserState = {
    user: {
        idUser: 0,
        nomUser: '',
        prenomUser: '',
        emailUser: '',
        telUser: '',
        mdpUser: ''
    }
}


export function userReducer(state: UserState = userInitState, action: UserActions): UserState {
    switch(action.type) {
        case UserActionsTypes.LOGIN: 
            return {
                ...state,
                user: action.payload
            };
        default: return {...state};
    }
}