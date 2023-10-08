import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://orca-app-6ulzl.ondigitalocean.app';

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/user/signin`, body, {
      headers: headers,
    });
  }

  signUp(
    name: string,
    phone: string,
    email: string,
    password: string
  ): Observable<any> {
    const body = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/user/signup`, body, {
      headers: headers,
    });
  }
}
