import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
  title: string = '';
  description: string = '';
  userId: string = '';
  id: string = '';
  completed: boolean = false;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.completed = this.route.snapshot.paramMap.get('completed') === 'true';
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.id, this.title, this.description, this.completed);
    this.taskService
      .updateTask(this.id, this.title, this.description, this.completed)
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
  onCancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home']);
  }
}
