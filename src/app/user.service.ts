import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ="http://localhost:9090/user/" ;
  constructor(private http : HttpClient) { }
  getUserList(): Observable<any> {
    return this.http.get<User []>(this.url,{ observe: 'response' });
  }
}
