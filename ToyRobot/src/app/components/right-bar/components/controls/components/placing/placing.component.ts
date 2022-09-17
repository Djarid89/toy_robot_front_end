import { Component } from '@angular/core';

@Component({
  selector: 'app-placing',
  templateUrl: './placing.component.html',
  styleUrls: ['./placing.component.scss']
})
export class PlacingComponent {
  options: string[] = [];
  option: string;

  constructor() {
    this.options = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
    this.option = this.options[0];
  }
}
