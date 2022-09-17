import { Component, Input } from '@angular/core';
import { IPlace } from 'src/app/interfaces/shared';

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
  @Input() robot?: IPlace;
  Facing = Facing;
  facing = Facing.NONE;
}
