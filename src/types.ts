export enum Direction {
  UP = "up",
  DOWN = "down",
  RIGHT = "right",
  LEFT = "left",
  UNSET = "unset",
}

export type Point = {
  x: number;
  y: number;
};

export interface Locatable {
  getCoordinates(): Point[];
}
