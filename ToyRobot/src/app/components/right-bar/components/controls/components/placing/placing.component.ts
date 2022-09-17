import { Component } from '@angular/core';
import { Direction } from 'src/app/components/field/components/cell/cell.component';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-placing',
  templateUrl: './placing.component.html',
  styleUrls: ['./placing.component.scss']
})
export class PlacingComponent {
  directions: Direction[] = [];
  direction = Direction.NONE;
  x = 0;
  y = 0;

  constructor(private readonly connector: ConnectorService) {
    this.directions = [];
    for(const direction of Object.keys(Direction).filter(key => !this.isNumber(key))) {
      if(direction !== Direction[Direction.NONE]) {
        this.directions.push(direction as unknown as Direction); 
      }
    }
    this.direction = this.directions[0];
  }

  setX(value: number): void {
    if(value < 0 || value > 4) {
      this.x = 0;
      this.connector.setX$.next(0);
      // TODO error
      return;
    }
    this.x = value;
    this.connector.setX$.next(this.x);
  }

  setY(value: number): void {
    if(value < 0 || value > 4) {
      this.y = 0;
      this.connector.setY$.next(0);
      // TODO error
      return;
    }
    this.y = value;
    this.connector.setY$.next(this.y);
  }

  placeRobot(): void {
    if(this.x < 0 || this.x > 4 || this.y < 0 || this.y > 4) {
      // TODO error
      return;
    }

    this.connector.setX$.next(0);
    this.connector.setY$.next(0);
    this.connector.place$.next({ x: this.x, y: this.y, direction: this.direction });
  }
  
  private isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && !isNaN(value - 0);
  }
}
