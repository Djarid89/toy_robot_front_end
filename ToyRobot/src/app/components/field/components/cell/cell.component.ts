import { Component, Input } from '@angular/core';

export enum Facing {
  NONE = 0,
  NORTH,
  WEST,
  SOUTH,
  EAST
}

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() row!: number;
  @Input() col!: number;
  @Input() robotHere = false;
  Facing = Facing;
  facing = Facing.NONE;
}
