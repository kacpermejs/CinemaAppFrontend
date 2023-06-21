import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface TokenDate {
  token: number;
  expirationDate: Date
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean = false;

  private url = "/api/usher/auth/login"

  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) {
    if (localStorage.getItem('wasLoggedIn') == "true" && this.isTokenValid()) {

      this.validateTokenServerSide().subscribe({
        next: e => {
          console.error("success");
          this._isLoggedIn = true;
        },
        error: e => {
          console.error("fail with");
          console.error(e);
          this._isLoggedIn = false;
        }
      });


    } else {
      //TODO navigate to login

    }

    //if wasn't logged in then do nothing and wait for user to click login

  }

  validateTokenServerSide(): Observable<TokenDate> {
    console.log("validating server side");
    const token = this.getToken();

    return this.http.get<TokenDate>('/api/usher/get_expiration_date?token=' + token);
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  isTokenValid(): boolean {
    const token = this.getToken();
    if (token && !this.jwtHelper.isTokenExpired(token)) {
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
    return localStorage.getItem('token') || '';
  }

  logout() {
    localStorage.setItem("wasLoggedIn", "false");
    localStorage.removeItem("token")
    this._isLoggedIn = false;

  }
}
