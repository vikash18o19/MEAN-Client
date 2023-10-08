import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'; // Replace with your API service import

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Submitting form...');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Make the API call to your backend for authentication
    this.apiService.signIn(this.email, this.password).subscribe(
      (response: any) => {
        console.log('API response:', response);
        if (response.status === 'SUCCESS') {
          // Save token, refreshToken, and user in local storage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          localStorage.setItem('user', JSON.stringify(response.data.user));

          // Route to /home
          this.router.navigate(['/home']);
        } else {
          // Handle authentication error here
          console.error('Authentication failed.');
        }
      },
      (error: any) => {
        // Handle API error here
        console.error('API error:', error);
      }
    );
  }
}
