import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://orca-app-6ulzl.ondigitalocean.app'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    // Define the request body with email and password
    const body = {
      email: email,
      password: password,
    };

    // Set the headers if needed (e.g., for JWT or other authentication methods)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers as needed
    });

    // Make the POST request to your authentication endpoint
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
    // Define the request body with email and password
    const body = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };

    // Set the headers if needed (e.g., for JWT or other authentication methods)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers as needed
    });

    // Make the POST request to your authentication endpoint
    return this.http.post(`${this.apiUrl}/user/signup`, body, {
      headers: headers,
    });
  }
}
