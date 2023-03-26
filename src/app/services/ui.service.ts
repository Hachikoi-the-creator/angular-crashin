import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = true;
  private subject = new Subject();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    // ??? tf bruv
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<unknown> {
    return this.subject.asObservable();
  }
}
