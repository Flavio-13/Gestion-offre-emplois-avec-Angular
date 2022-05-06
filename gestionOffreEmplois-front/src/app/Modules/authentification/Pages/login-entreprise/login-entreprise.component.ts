import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-entreprise',
  templateUrl: './login-entreprise.component.html',
  styleUrls: ['./login-entreprise.component.scss']
})
export class LoginEntrepriseComponent implements OnInit {

  public loginFormGroup: FormGroup = new FormGroup({
    nomEntreprise: new FormControl(''),
    mdpEntreprise: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  public getLoginEntreprise(): void {
    
  }

}
