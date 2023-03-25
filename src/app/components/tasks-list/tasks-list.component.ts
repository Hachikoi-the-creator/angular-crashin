import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/taskHardCodded';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  tasksList: Task[] = TASK;
}
