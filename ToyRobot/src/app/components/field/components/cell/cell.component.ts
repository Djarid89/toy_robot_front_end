import { Component, Input } from '@angular/core';
import { IRobot } from 'src/app/interfaces/shared';

export enum Direction {
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
  @Input() robot?: IRobot;
  Direction = Direction;

  getArrow(robotDirection: Direction, direction: Direction): boolean {
    const key = Object.values(Direction).indexOf(robotDirection as unknown as Direction);
    return key === direction;
  }
}
