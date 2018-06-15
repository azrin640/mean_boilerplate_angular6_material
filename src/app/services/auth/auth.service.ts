import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: "root"})

export class AuthService {

  constructor( 
    private http: HttpClient
  ) { }

  login(credentials){
    
  }

  register(credentials){
      return this.http.post("/api/register", credentials.value);
    };
}
