import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  title: string = '';
  description: string = '';
  userId: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.taskService
      .createTask(this.title, this.description)
      .subscribe((response: any) => {
        console.log('API response:', response);
        if (response.status === 200) {
          // Route to /home
          this.router.navigate(['/home']);
        } else {
          // Handle authentication error here
          console.error('Authentication failed.');
        }
        this.router.navigate(['/home']);
      });
  }
}
