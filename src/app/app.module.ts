import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Material Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavigationModule } from './navigation.module';

// Angular Flex
import { FlexLayoutModule } from '@angular/flex-layout';

//Components
import { NavigationsComponent } from './navigations/navigations.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

// Services
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    FormsModule,
    HttpClientModule,
    HttpModule,

    // Material Module
    BrowserAnimationsModule,
    MaterialModule,

    // Flex Layout Module
    FlexLayoutModule,

    // Auth 0 Module
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200', 'localhost:7777']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
