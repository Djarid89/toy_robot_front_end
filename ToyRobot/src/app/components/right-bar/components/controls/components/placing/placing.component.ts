import { Component } from '@angular/core';
import { Facing as Direction } from 'src/app/components/field/components/cell/cell.component';
import { ConnectorService } from 'src/app/services/connector.service';

@Component({
  selector: 'app-placing',
  templateUrl: './placing.component.html',
  styleUrls: ['./placing.component.scss']
})
export class PlacingComponent {
  options: string[] = [];
  option: string;
  x!: number | undefined;
  y!: number | undefined;
  direction = Direction.NONE;

  constructor(private readonly connector: ConnectorService) {
    this.options = [];
    for(const direction of Object.keys(Direction).filter(key => !this.isNumber(key))) {
      if(direction !== Direction[Direction.NONE]) {
        this.options.push(direction); 
      }
    }
    this.option = this.options[0];
  }

  setX(value: number): void {
    if(value < 0 || value > 4) {
      this.x = undefined;
      // TODO error
      return;
    }
    this.x = value;
  }

  setY(value: number): void {
    if(value < 0 || value > 4) {
      this.y = undefined;
      // TODO error
      return;
    }
    this.y = value;
  }

  placeRobot(): void {
    if(this.x === undefined || this.y === undefined) {
      // TODO error
      return;
    }

    this.connector.place$.next({ x: this.x, y: this.y, direction: this.direction });
  }
  
  private isNumber(value: any): boolean {
    return !isNaN(parseFloat(value)) && !isNaN(value - 0);
  }
}
