import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  maxDate;
  invalidUser = false;
  invalidUserMessage;
  
  constructor( 
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  
  }

  onSubmit(credentials: HTMLInputElement){
    this.authService.register(credentials)  
      .subscribe((response: any) => {
        console.log(response);
        if (response.status === 201){
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        }
        if (response.status === 400){
          this.invalidUser = true;
          this.invalidUserMessage = response.message;
        }
      });
  }

}
