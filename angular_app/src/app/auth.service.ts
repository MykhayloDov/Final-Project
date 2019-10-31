import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  constructor(private http: HttpClient) {
  }

  public login(userInfo: User) {
    const users: User[] = [];
    localStorage.setItem('Admin', 'true');
  }

  public isLoggedIn() {
    return localStorage.getItem('Admin') !== null;

  }

  public logout() {
    localStorage.removeItem('Admin');
  }
}
