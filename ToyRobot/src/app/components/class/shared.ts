import { Direction, Move } from "src/app/interfaces/shared";
import { ConnectorService } from "src/app/services/connector.service";

export class Robot {
  direction: Direction;
  x: number;
  y: number;

  constructor(x: number, y: number, direction: Direction) {
    this.direction = direction;
    this.x = x;
    this.y = y;
  }

  turn(move: Move): void {
    if(move === Move.LEFT) {
      this.direction = this.direction - 1 < Direction.NORTH ? Direction.WEST : this.direction - 1;
    } else {
      this.direction = this.direction + 1 > Direction.WEST ? Direction.NORTH : this.direction + 1;
    }
  }

  move(connector: ConnectorService): void {
    if(this.direction === Direction.NORTH && this.x + 1 < 5) {
      connector.place$.next(new Robot(this.x + 1, this.y, this.direction));
    } else if(this.direction === Direction.EAST && this.y + 1 < 5) {
      connector.place$.next(new Robot(this.x, this.y + 1, this.direction));
    } else if(this.direction === Direction.SOUTH && this.x - 1 >= 0) {
      connector.place$.next(new Robot(this.x - 1, this.y, this.direction));
    } else if(this.direction === Direction.WEST && this.y - 1 >= 0) {
      connector.place$.next(new Robot(this.x, this.y - 1, this.direction));
    }
  }
}

