import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    const navigationExtras: NavigationExtras = {
      skipLocationChange: true,
    };
    this.router.navigate(['/signin'], navigationExtras);
  }
  createTask() {
    this.router.navigate(['/tasks/create']);
  }
}
