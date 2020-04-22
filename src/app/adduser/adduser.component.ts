import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserInter } from '../class/UserInter';
const url = 'http://localhost:8080/SpringBootRestApi/api/user/';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  loginForm: FormGroup;
  user : UserInter;
  postId;

  constructor( 
    private fb: FormBuilder, 
    private http: HttpClient,
    private router: Router, ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      salary: new FormControl(),
    });
  }

  login() {
    console.log('Données du formulaire...', this.loginForm.value);
    //console.log('-------------> ID : ', this.loginForm.value.name)

    let headers = new Headers({ 'content-type': 'application/json', 'accept': 'application/json'});
    let body = this.loginForm.value;

    if(this.loginForm.value.name){

      this.http.post<UserInter>(url, body).subscribe({
            //next: data => this.postId = data.name,
            error: error => console.error('------------> error : ', error),
        });
        // redirection vers liste Users
        this.router.navigate(['./apilire']);
        
    }

  }



}
