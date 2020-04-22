import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ReadapiService } from '../readapi.service';
import { User } from '../class/users';

const url = 'http://localhost:8080/SpringBootRestApi/api/user/';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user : User;
  
  
  
  constructor(private http: HttpClient, private readapi: ReadapiService, private route: ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');
    
    // this.user = this.readapi.getOne(Number(id));
    //console.log("------------ user : "+Object.values(this.user ));
    
    return this.http.get<User>(url+id)
    .subscribe(user => {
      this.user = user
    });
    
  }

}
