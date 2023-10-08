import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  taskArray: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((response: any) => {
      this.taskArray = response.data;

      console.log(this.taskArray);
    });
  }

  onDelete(id: string) {
    // Delete task with given id
  }

  onEdit(id: string) {
    // Edit task with given id
  }

  onToggle(id: string) {
    // Toggle task with given id
  }
}
