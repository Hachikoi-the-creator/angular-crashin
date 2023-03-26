import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Omit<Task, 'id'>> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit() {
    // validate inputs
    const validInputs = this.text.length > 3 && this.day.length > 3;
    if (!validInputs) {
      window.alert('Add valid task');
      return console.error('Invalid inputs, try again dummy');
    }

    const validNewTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // make the parent to the actual update
    this.onAddTask.emit(validNewTask);

    // clear form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
