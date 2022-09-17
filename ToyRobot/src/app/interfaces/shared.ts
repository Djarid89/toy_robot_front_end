import { Facing } from "../components/field/components/cell/cell.component";

export interface IPlace extends IDirection, ICoordinate { }

export interface ICoordinate {
  x: number;
  y: number;
}

export interface IDirection {
  direction: Facing;
}