import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  taskArray: any[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((response: any) => {
      this.taskArray = response.data;

      console.log(this.taskArray);
    });
  }

  onDelete(id: string) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      this.taskService.deleteTask(id).subscribe((response: any) => {
        console.log(response);
        if (response.status === 200) {
          this.taskArray = this.taskArray.filter((task) => task._id !== id);
          // location.reload(); // Reload the current route
        } else {
          alert('Error deleting task');
        }
      });
    }
  }

  onEdit(id: string, completed: boolean) {
    // Redirect to EditTaskComponent with the id of the task to be edited
    this.router.navigate(['/edit-task', id, completed]);
  }

  onToggle(id: string) {
    const task = this.taskArray.find((task) => task._id === id);
    if (task) {
      task.completed = !task.completed;
      this.taskService
        .updateTask(id, task.title, task.description, task.completed)
        .subscribe((response: any) => {
          console.log(response);
        });
    }
  }
}
