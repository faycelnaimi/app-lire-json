import { Component, OnInit } from '@angular/core';
import { ReadapiService } from "./readapi.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users: any = [];

constructor(private readapiService : ReadapiService){}




  title = 'my-app';
}
