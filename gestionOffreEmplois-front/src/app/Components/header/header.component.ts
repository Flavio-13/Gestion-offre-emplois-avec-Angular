import { Component, Input, OnInit } from '@angular/core';
import { Links } from 'src/app/models/Links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public links: Array<Links>;

  constructor() { 
    this.links = new Array<Links>();
  }

  ngOnInit(): void {
    
  }
}
