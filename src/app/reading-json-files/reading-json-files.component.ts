import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';




@Component({
  selector: 'app-reading-json-files',
  templateUrl: './reading-json-files.component.html',
  styleUrls: ['./reading-json-files.component.css']
})
export class ReadingJsonFilesComponent implements OnInit {

  title = 'Angular Example';
  products: any = [];

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("./assets/SampleJson.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

   somme (x: string, y:string): String {
        var nb =  parseFloat(x) * parseFloat(y) ;
        return String(nb);
    }

  nameHi(name: string){
    return "Hi, "+ name;
  }

  isBig (x: string): Boolean{
    if(parseFloat(x) > 200){
      return true;
    }else{
      return false;
    } 
  }

}
