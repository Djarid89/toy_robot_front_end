import { Component } from '@angular/core';
import { Robot } from 'src/app/components/class/shared';
import { Direction, IDirectionDescription } from 'src/app/interfaces/shared';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-placing',
  templateUrl: './placing.component.html',
  styleUrls: ['./placing.component.scss']
})
export class PlacingComponent {
  dirDescrs: IDirectionDescription[] = [];
  direction: Direction;
  x = 0;
  y = 0;

  constructor(private readonly connector: ConnectorService) {
    this.dirDescrs = [
      { direction: Direction.NORTH, description: 'NORTH' },
      { direction: Direction.EAST, description: 'EAST' },
      { direction: Direction.SOUTH, description: 'SOUTH' },
      { direction: Direction.WEST, description: 'WEST' }
    ];
    this.direction = this.dirDescrs[0].direction;
  }

  setX(value: number): void {
    if(value < 0 || value > 4) {
      this.connector.setX$.next(0);
      this.connector.error$.next('x and y must be between 0 and 4');
      return;
    }
    this.connector.setX$.next(this.x);
  }

  setY(value: number): void {
    if(value < 0 || value > 4) {
      this.connector.setY$.next(0);
      this.connector.error$.next('x and y must be between 0 and 4');
      return;
    }
    this.connector.setY$.next(this.y);
  }

  placeRobot(): void {
    if(this.x < 0 || this.x > 4 || this.y < 0 || this.y > 4) {
      this.connector.error$.next('x and y must be between 0 and 4');
      return;
    }

    this.connector.setX$.next(0);
    this.connector.setY$.next(0);
    this.connector.place$.next(new Robot(this.x, this.y, this.direction));
  }
  
  toDirection(value: IDirectionDescription): void {
    this.direction = value.direction;
  }
}
