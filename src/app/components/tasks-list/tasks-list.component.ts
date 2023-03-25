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
    this.tasksList = this.taskService.getAllTasks();
  }
}
