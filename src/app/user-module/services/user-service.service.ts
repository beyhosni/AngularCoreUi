import { AuthenticationService } from './../../auth-module/services/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrudService } from './../../shared/crud.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../../app-config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements CrudService {


  constructor(private httpClient: HttpClient,
              private authService: AuthenticationService) {
                console.log(this.headers);
               }

  headers = new HttpHeaders({'authorization' : 'Bearer ' + this.authService.principal.token});

  getAll(): Observable<any> {
    return this.httpClient.get('url');
  }

  add(user): Observable<any> {
    return this.httpClient.post(API_URLS.USER_URL_REGISTER, user, {headers : this.headers});
  }

  update(user: any): Observable<any> {
    return this.httpClient.put('url', user);

  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete('url' + `/${id}`);
  }

}
