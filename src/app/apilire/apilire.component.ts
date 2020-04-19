import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { User } from '../class/users';
 
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

  constructor(private http: HttpClient) {}

 
  ngOnInit() { 


    // call for Requete get Simple API All Users
    return this.http.get<User[]>(url)
      .subscribe(users => {
        this.users = users,
        err => console.log(err),
        console.log(this.users)
      });
  
}


// Appel juste un seul id
  getOne(id: number){
    return this.http.get<User>(url+id)
    .subscribe(user => {
      this.user = user,
      console.log(this.user)
    });
    
  }



}
