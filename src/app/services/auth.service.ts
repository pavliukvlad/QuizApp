import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/view_models/login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginUrl = "api/Account/Login";
  private readonly signOutUrl = "api/Account/LogOff";

  constructor(private httpClient: HttpClient) { }

  signIn(loginModel: LoginModel){
    return this.httpClient.post(this.loginUrl, loginModel)
      .pipe(map(user => localStorage.setItem("currentUser", JSON.stringify(user))));
  } 
  
  isAuthorized(): boolean{
    if (localStorage.getItem("currentUser")){
      return true;
    }
    return false
  }

  signOut(){
    return this.httpClient.post(this.signOutUrl, "");
  }
}
