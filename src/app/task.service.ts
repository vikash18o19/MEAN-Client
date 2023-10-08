import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://orca-app-6ulzl.ondigitalocean.app';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    const token: string | null = localStorage.getItem('token');
    const user: string | null = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    const userId = userObj._id;
    const params = {
      userId: userId,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.apiUrl}/tasks`, {
      headers: headers,
      params: params,
    });
  }

  createTask(title: string, description: string): Observable<any> {
    const token: string | null = localStorage.getItem('token');
    const user: string | null = localStorage.getItem('user');
    const userObj = JSON.parse(user!);
    const userId = userObj._id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    const body = {
      title: title,
      description: description,
      userId: userId,
    };
    return this.http.post(`${this.apiUrl}/tasks`, body, { headers: headers });
  }

  deleteTask(id: string): Observable<any> {
    const token: string | null = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete(`${this.apiUrl}/tasks/${id}`, { headers: headers });
  }

  updateTask(
    id: string,
    title: string,
    description: string,
    completed: boolean
  ): Observable<any> {
    const token: string | null = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    const body = {
      title: title,
      description: description,
      completed: completed,
    };
    return this.http.put(`${this.apiUrl}/tasks/${id}`, body, {
      headers: headers,
    });
  }
}
