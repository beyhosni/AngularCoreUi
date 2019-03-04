import { API_URLS } from './../../app-config/api.url.config';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  principal = {
    username: '',
    password: '',
    token: '',
    roles: Array<String>()
  };


  isAuth: Boolean = false;

  constructor(private httpClient: HttpClient) {

   }

  login(data): Observable<any> {
    return this.httpClient.post(API_URLS.USER_URL, data, {observe: 'response'}).pipe(map(res => {
      return res;
    }));
  }

  saveToken(jwt: string): void {
    // save token in local storage
    this.principal.token = jwt;
    localStorage.setItem('token', jwt);
    this.parseJWT();
  }

  parseJWT(): void {
    const jwtHelper = new JwtHelperService();
    this.principal.username = jwtHelper.decodeToken(this.principal.token).sub;
    this.principal.roles  = jwtHelper.decodeToken(this.principal.token).roles;
    this.isAdmin();
    // this.isAuth = true;
  }

  isAdmin(): Boolean {
    return this.principal.roles.length === 2;
  }

  isUser(): Boolean {
    return this.principal.roles.length === 1;
  }

  loadToken(): void {
    if (localStorage.getItem('token') != null) {
    this.principal.token = localStorage.getItem('token');
    this.parseJWT();
    } else {
      this.isAuth = false;
    }
  }

}
