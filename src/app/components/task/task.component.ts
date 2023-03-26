import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  // @Input() task!: Task; - tell ts that I'm condifent this will have a value at runtime, no likey
  @Input() task: Task = {
    text: '',
    day: '',
    reminder: false,
  };
  // < T >type of the param to emit to the parent
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();
  @Output() onUpdateReminder: EventEmitter<Task> = new EventEmitter();

  onDelete(id: number) {
    this.onDeleteTask.emit(id);
  }

  onUpdate(task: Task) {
    this.onUpdateReminder.emit(task);
  }
}
