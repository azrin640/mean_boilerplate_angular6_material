import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: "root"})

export class AuthService {

  constructor( 
    private http: HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  

  register(credentials){
    return this.http.post("/api/register", credentials);        
  }
  
  login(credentials){
    return this.http.post("api/login", credentials);    
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    let validToken = this.jwtHelper.isTokenExpired(token);
    if (validToken === true){
      return true;
    }
    else {
      return false;
    }
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if (!token){
      return null;
    } 
    if (token){
      return this.jwtHelper.decodeToken(token);
    }    
  }

  logout(){
    localStorage.removeItem('token');
  }
}
