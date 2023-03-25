import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasksList: Task[] = [];

  // call the service we created to get the data
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // this.tasksList = this.taskService.getAllTasks()

    // now the value will automatically change everytime the observable changes
    this.taskService
      .getAllTasks()
      .subscribe((taskArr) => (this.tasksList = taskArr));
  }

  // -1 since the ids start in 1
  removeTask(id: number) {
    this.tasksList.splice(id - 1, 1);
  }
}
