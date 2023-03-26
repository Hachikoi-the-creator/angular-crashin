import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'Task Tracker UwU';
  showAddTask: boolean = false;
  // im sure this will have a value & no idea how to give it a default one lol
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    // link local toggle w/ service's
    this.subscription = uiService.onToggle().subscribe((_prev) => {
      // this.showAddTask = _prev, doesn't work new update
      this.showAddTask = !this.showAddTask;
    });
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  isInRoute(route: string) {
    return this.router.url === route;
  }
}
