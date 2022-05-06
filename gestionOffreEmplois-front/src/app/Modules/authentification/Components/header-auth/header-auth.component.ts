import { Component, Input, OnInit } from '@angular/core';
import { Links } from 'src/app/models/Links';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss']
})
export class HeaderAuthComponent implements OnInit {

  @Input() public links: Array<Links>;

  constructor() { 
    this.links = new Array<Links>();
  }

  ngOnInit(): void {
    
  }
  
}
