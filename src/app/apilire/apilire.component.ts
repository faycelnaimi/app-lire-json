import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { User } from '../class/users';

import { ReadapiService } from '../readapi.service';

 
const url = 'http://localhost:8080/SpringBootRestApi/api/user/';
//const urljson = 'https://jsonplaceholder.typicode.com/users/';
//const url2 = './assets/data/SampleJson.json';

@Component({
  selector: 'app-apilire',
  templateUrl: './apilire.component.html',
  styleUrls: ['./apilire.component.css']
})
export class ApilireComponent implements OnInit {

  users : User[];
  user : User;
  id: number;

  constructor(private http: HttpClient, private readapi : ReadapiService) {}

 
  ngOnInit() { 
    

    // call for Requete get Simple API All Users
    this.http.get<User[]>(url)
      .subscribe(users => {
        this.users = users,
        err => console.log(err),
        console.log(this.users)
      });
  
}


// Appel juste un seul id
  getOne(id){
    // Appel service readapi.service.ts
    return this.readapi.getOne(id);
    
  }



}
