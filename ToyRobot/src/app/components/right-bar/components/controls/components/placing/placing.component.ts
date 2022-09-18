import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { Robot } from 'src/app/components/class/shared';
import { Direction, IDirectionDescription, KEY_CODE } from 'src/app/interfaces/shared';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-placing',
  templateUrl: './placing.component.html',
  styleUrls: ['./placing.component.scss']
})
export class PlacingComponent {
  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if(event.key === KEY_CODE.P) {
      this.placeRobot();
    }
  }
  
  dirDescrs: IDirectionDescription[] = [];
  range: number[] = [];
  direction: Direction;
  x = 0;
  y = 0;

  constructor(readonly connector: ConnectorService) {
    this.dirDescrs = [
      { direction: Direction.NORTH, description: 'NORTH' },
      { direction: Direction.EAST, description: 'EAST' },
      { direction: Direction.SOUTH, description: 'SOUTH' },
      { direction: Direction.WEST, description: 'WEST' }
    ];
    this.range = [0, 1, 2, 3, 4];
    this.direction = this.dirDescrs[0].direction;
  }

  asd() {
    console.log(this.x);
    this.connector.setX$.next(this.x)
  }

  placeRobot(): void {
    if(this.x < 0 || this.x > 4 || this.y < 0 || this.y > 4) {
      this.connector.error$.next('x and y must be between 0 and 4');
      return;
    }

    this.connector.setX$.next(0);
    this.connector.setY$.next(0);
    this.connector.place$.next(new Robot(this.x, this.y, this.direction));
    this.x = 0;
    this.y = 0;
  }
}
