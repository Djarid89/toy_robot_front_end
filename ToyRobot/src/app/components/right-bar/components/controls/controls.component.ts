import { Component, OnInit } from '@angular/core';

enum State {
  Placing = 0,
  Moving
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  state = State.Placing;
  State = State;


  constructor() {

  }

  ngOnInit(): void {
  }

}
