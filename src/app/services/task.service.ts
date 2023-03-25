import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASK } from '../taskHardCodded';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getAllTasks(): Task[] {
    return TASK;
  }
}
