import { Component, Input, OnInit } from '@angular/core';
import { Links } from 'src/app/models/Links';

@Component({
  selector: 'app-header-entreprise',
  templateUrl: './header-entreprise.component.html',
  styleUrls: ['./header-entreprise.component.scss']
})
export class HeaderEntrepriseComponent implements OnInit {

  @Input() public links: Array<Links>;

  constructor() { 
    this.links = new Array<Links>();
  }

  ngOnInit(): void {
    
  }

}
