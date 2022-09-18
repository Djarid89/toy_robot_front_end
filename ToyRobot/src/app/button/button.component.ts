import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text!: string;
  @Output() clickEmitter = new EventEmitter<void>();

  stopPropagation(event: any): void {
    event.preventDefault();
    event.preventDefault();
  }

  clickFn(): void {
    this.clickEmitter.next();
  }
}
