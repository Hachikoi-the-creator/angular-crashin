import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASK } from '../taskHardCodded';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private BASE_URL = 'https://crashing-together.onrender.com';
  constructor(private ngFetch: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.ngFetch.get<Task[]>(`${this.BASE_URL}/angular`);
  }

  getOneTask(id: number): Task | {} {
    return TASK.find((e) => e.id === id) || {};
  }

  removeTask(id: number): Task {
    const removed = TASK.splice(id, 1);
    return removed[0];
  }

  // addTask(text: string, day: string, reminder: boolean): Task {
  //   const rndId = Math.round(Math.random() * 100);
  //   const newTask: Task = { text, day, reminder, id: rndId };

  //   TASK.push(newTask);
  //   return newTask;
  // }

  // updateTask(text: string, day: string, reminder: boolean, id: number): Task {
  //   const updatedTask: Task = { text, day, reminder, id };

  //   TASK.splice(id, 1, updatedTask);
  //   return updatedTask;
  // }
}
