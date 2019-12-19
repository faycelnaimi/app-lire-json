import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu = ['Accueil', 'Presentaion', 'Service', 'Contact'];


  myHero = this.menu[2];

  constructor() { }

  ngOnInit() {
  }

}
