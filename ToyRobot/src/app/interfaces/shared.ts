import { Direction } from "../components/field/components/cell/cell.component";

export interface IRobot extends IDirection, ICoordinate { }

export interface ICoordinate {
  x: number;
  y: number;
}

export interface IDirection {
  direction: Direction;
}