import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = {
    text: '',
    day: '',
    reminder: false,
  };
  // type of the param to emit to the parent
  // @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() onDeleteTask: EventEmitter<number> = new EventEmitter();

  // @Input() task!: Task; - tell ts that I'm condifent this will have a value at runtime, no likey

  onDelete(id: number) {
    this.onDeleteTask.emit(id);
  }
}
