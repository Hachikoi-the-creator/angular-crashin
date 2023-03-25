import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASK } from '../taskHardCodded';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getAllTasks(): Observable<Task[]> {
    return of(TASK);
  }
}
