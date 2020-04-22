import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { ReadingJsonFilesComponent } from './reading-json-files/reading-json-files.component';

import { HttpClientModule } from '@angular/common/http';
import { ApilireComponent } from './apilire/apilire.component';

import { ReadapiService } from './readapi.service';

import { User } from './class/users';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeComponent,
    ReadingJsonFilesComponent,
    ApilireComponent,
    UserDetailComponent,
    AdduserComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [ReadapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
