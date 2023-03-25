import { Component, Input } from '@angular/core';
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
  // @Input() task!: Task; - tell ts that I'm condifent this will have a value at runtime, no likey
}
