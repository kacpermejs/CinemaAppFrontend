import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean = false;
  private _token: string;

  private url = "http://localhost:8080/api/usher/auth/login"

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) {
    this._token = localStorage.getItem('token') || '';

    if (localStorage.getItem('wasLoggedIn') == "true" && this.isTokenValid()) {
      this._isLoggedIn = true;
    } else {
      //TODO navigate to login

    }

    //if wasn't logged in then do nothing and wait for user to click login

  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  isTokenValid(): boolean {
    if (this._token && !this.jwtHelper.isTokenExpired(this._token)) {
      // Token is valid
      return true;
    }

    // Token is invalid or expired
    return false;
  }

  login(login: string, password: string) {
    const post = this.http.post(this.url, {login: login, password: password});
    post.subscribe( {
      next: (res: any) => this.onLoginSuccessful(res.token),
      error: err => console.log(err)
    });
    return post;
  }

  onLoginSuccessful(token: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem("wasLoggedIn", "true");
    this._isLoggedIn = true;
  }

  getToken(): string {
    return this._token;
  }

  logout() {
    localStorage.setItem("wasLoggedIn", "false");
    localStorage.removeItem("token")
    this._isLoggedIn = false;

  }
}
