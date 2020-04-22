import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApilireComponent } from './apilire/apilire.component';
import { ListeComponent } from './liste/liste.component';
import { ReadingJsonFilesComponent } from './reading-json-files/reading-json-files.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AdduserComponent } from './adduser/adduser.component';


const routes: Routes = [
  {
    path: 'app',
    component:  AppComponent 
  },
  {
    path: 'apilire',
    component:  ApilireComponent 
  },
  {
    path: 'lire',
    component:  ListeComponent 
  },
  {
    path: 'afficheJSON',
    component:  ReadingJsonFilesComponent 
  },
  {
    path: 'detailuser/:id',
    component:  UserDetailComponent 
  },
  {
    path: 'addUser',
    component:  AdduserComponent 
  },
  { 
    path: '**',
    redirectTo: 'not-found' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
