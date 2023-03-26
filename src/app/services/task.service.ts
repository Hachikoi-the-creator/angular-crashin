import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // private BASE_URL = 'https://crashing-together.onrender.com/angular';
  private BASE_URL = 'http://localhost:1313/angular';
  constructor(private ngFetch: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    // dont need of, since HttpClient returns an obervable
    return this.ngFetch.get<Task[]>(this.BASE_URL);
  }

  getOneTask(id: number): Observable<Task> {
    const url = `${this.BASE_URL}/${id}`;
    // specify the fetch return type here
    return this.ngFetch.get<Task>(url);
  }

  removeOneTask(id: number): Observable<Task> {
    const url = `${this.BASE_URL}/${id}`;
    console.log('url', url);

    return this.ngFetch.delete<Task>(url);
  }

  // addTask(text: string, day: string, reminder: boolean): Task {
  //   const rndId = Math.round(Math.random() * 100);
  //   const newTask: Task = { text, day, reminder, id: rndId };

  //   TASK.push(newTask);
  //   return newTask;
  // }
}
