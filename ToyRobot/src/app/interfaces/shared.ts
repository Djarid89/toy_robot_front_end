export interface IDirectionDescription {
  direction: Direction;
  description: string;
}

export enum Direction {
  NORTH = 0,
  EAST,
  SOUTH,
  WEST
}

export enum Move {
  LEFT = 0,
  RIGHT
}