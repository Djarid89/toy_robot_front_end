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

export enum KEY_CODE {
  RIGHT_ARROW = 'ArrowRight',
  LEFT_ARROW = 'ArrowLeft',
  ENTER = 'Enter',
  R = 'r',
  P = 'p'
}