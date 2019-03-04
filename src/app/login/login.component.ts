import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AuthenticationService } from '../auth-module/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit, OnDestroy {

  subscription: Subscription;
  invalide: Boolean = false;

  credentials = {
     username: '',
     password: ''
  };

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  login(credentials) {
    this.subscription = this.authenticationService.login(credentials).subscribe(
      (response: HttpResponse<any>) => {
        this.authenticationService.isAuth = true;
        this.invalide = false;
        const jwt = response.headers.get('Authorization').substring(7);
        this.authenticationService.saveToken(jwt);
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        this.invalide = true;
        console.log('An error occurred! : ' + error);
      },
      () => {
        console.log(/*'Observable complete!' */);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
        this.subscription.unsubscribe();
        console.log('unsubscription ok !');
    }
  }
}

