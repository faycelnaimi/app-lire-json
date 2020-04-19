import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReadapiService {

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get<any>("http://localhost:8080/SpringBootRestApi/api/user/");
  }

  getUsers() {
    return this.http.get("http://localhost:8080/SpringBootRestApi/api/user/");
  }

}
