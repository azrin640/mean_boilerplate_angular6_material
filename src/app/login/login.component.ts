import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError = false;
  loginErrorMessage;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(credentials: HTMLInputElement){
    this.authService.login(credentials)
      .subscribe((response: any) => {
        if (response.status === 202){
          localStorage.setItem('token', response.token);
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        if (response.status === 404){
          this.loginError = true;
          this.loginErrorMessage = response.message;
        }
      })
  }

}
