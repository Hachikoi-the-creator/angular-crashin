import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  // must have a default value somehow, what was good practice now throws an error
  @Input() text: string = '';
  @Input() bgColor: string = '';
  @Input() color: string = '';
  // to have dynamic btn functtionality
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
