import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';
  phone: string = '';
  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Submitting form...');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Name:', this.name);
    console.log('Phone:', this.phone);
    this.apiService
      .signUp(this.name, this.phone, this.email, this.password)
      .subscribe(
        (response: any) => {
          console.log('API response:', response);
          if (response.status === 'SUCCESS') {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            this.router.navigate(['/home']);
          } else {
            console.error('Authentication failed.');
          }
        },
        (error: any) => {
          alert(error.error.message);
          console.error('API error:', error);
        }
      );
  }
}
