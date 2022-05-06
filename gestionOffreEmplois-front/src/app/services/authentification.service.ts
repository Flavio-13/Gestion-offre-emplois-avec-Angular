import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/User";
import { UserLogin } from "src/app/models/UserLogin";

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    private apiURL: string = 'http://localhost:8080';


    constructor(private http: HttpClient) {
    }


    /**
     * 
     * @param userLogin The password and email of the user who will be verified by the back-end
     * @returns Observable  
     */
    public getUserLogin(userLogin: UserLogin): Observable<User> {
        return this.http.post<User>(`${this.apiURL}/user/login`, userLogin);
    }

    /**
     * 
     * @param user the user who was verified by back-end
     * @returns User
     */
    public getInstanceLogin(user: User): User {
        return user;
    }
}