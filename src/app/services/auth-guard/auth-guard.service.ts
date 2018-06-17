import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route, state: RouterStateSnapshot){
    if(!this.authService.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login']
        ,{ queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
