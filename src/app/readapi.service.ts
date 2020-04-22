import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

import { User } from './class/users';

const url = 'http://localhost:8080/SpringBootRestApi/api/user/';


@Injectable({
  providedIn: 'root'
})
export class ReadapiService {

  user : User;

constructor(private http: HttpClient) { }

 getOne(id: number){
    // Appel juste un seul id
    return this.http.get<User>(url+id)
    .subscribe(user => {
      this.user = user,
      console.log(this.user)
    });
  }





}
