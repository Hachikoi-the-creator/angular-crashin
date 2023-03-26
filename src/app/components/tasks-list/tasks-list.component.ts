import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasksList: Task[] = [];

  // call the service we created to get the data
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // now the value will automatically change everytime the observable changes
    this.taskService
      .getAllTasks()
      // .subscribe === .then
      .subscribe((taskArr) => (this.tasksList = taskArr));
  }

  // -1 since the ids start in 1
  removeTask(id: number) {
    if (id === -1) return console.error("That's an incorrect id fellow human~");
    // console.log('deleting from parent', id);
    this.taskService.removeOneTask(id).subscribe(() => {
      // update UI
      const taskIndex = this.tasksList.findIndex((e) => e.id === id);
      this.tasksList.splice(taskIndex, 1);
    });
  }

  updateReminderStatus(taskObj: Task) {
    if (taskObj.id === -1)
      return console.error("That's an incorrect id fellow human~ upt");
    // console.log('updaeting from parent');
    this.taskService.updateReminderStatus(taskObj).subscribe(() => {
      // update UI
      this.tasksList.forEach((task) => {
        if (task.id === taskObj.id) {
          task.reminder = !taskObj.reminder;
        }
      });
    });
  }
}
